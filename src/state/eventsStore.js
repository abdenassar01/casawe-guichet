import { types } from 'mobx-state-tree';
import instance from '../axios/axios';
import requests from '../axios/requests';

const _fetchEvents = async () => {
    // async
    // const data = await instance.get(requests.listingSport);
    // const events = data.events;
    const response = await fetch("https://api.preprod.guichet.com/events?category_id=6");
    const data = await response.json();
    const events = data.events;
    // console.log(events);
    return events;
}

const _fetchEventById = async (id) => {
    const response = await fetch(`https://api.preprod.guichet.com/events/${id}`);
    const data = await response.json();
    const event = data.event;
    return event;
}

const Event = types.model({
    id: types.number,
    status: types.string,
    title: types.string,
    description: types.string,
    price: types.number,
    soldOut: types.boolean,
    cover: types.string 
}).actions(self => ({
    setEvent(newEvent){
        self.id = newEvent.id;
        self.status = newEvent.status;
        self.title = newEvent.title;
        self.description = newEvent.description;
        self.price = newEvent.price;
        self.soldOut = newEvent.soldOut;
        self.cover = newEvent.cover;
    },
    async fetchEventById(id){
        const data = await _fetchEventById(id);
        self.setEvent(data);
    }
}))

const EventList = types.model({
    events: types.array(Event)
}).actions(self => ({
    setEvents(newEvents){
        self.events = newEvents;
    },
    async fetchEvents(){
        const data = await _fetchEvents();
        const newEvents = data.map(event => ({
            id: event.id,
            status: event.status,
            title: event.title,
            description: event.description,
            price: event.price,
            soldOut: event.soldOut,
            cover: event.cover 
        }))
        self.setEvents(newEvents)
    }
}))

let _eventsStore;
const useEvents = () => {
  if (!_eventsStore) {
    _eventsStore = EventList.create({
      events: []
    });
  }

  return _eventsStore;
};

let _eventStore
export const useEvent = () => {
    if(!_eventStore) {
        _eventStore = Event.create({
            event : {
                id: "",
                status: "",
                title: "",
                description: "",
                price: "",
                soldOut: "",
                cover: ""
            }
        })
    }

    return _eventStore;
}

export default useEvents;