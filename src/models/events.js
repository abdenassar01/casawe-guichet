import { types } from 'mobx-state-tree';
// import instance from '../axios/axios';
// import requests from '../axios/requests';

const _fetchEvents = async () => {
    const response = await fetch("https://api.preprod.guichet.com/events?category_id=6");
    const data = await response.json();
    const events = data.events;
    return events;
}

const _fetchEventById = async (id) => {
    const response = await fetch(`https://api.preprod.guichet.com/events/${id}`);
    const data = await response.json();
    const event = data.event;
    return event;
}

const Event = types.model({
    id: types.optional(types.number, 0),
    status: types.optional(types.string, ""),
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    price: types.optional(types.number, 0),
    soldOut: types.optional(types.boolean, false),
    cover: types.optional(types.string, "") 
})
.actions(self => ({
    addEvent({id, status, title, description, price, soldOut, cover}){
        self.id = id;
        self.status = status;
        self.title = title;
        self.description = description;
        self.price = price;
        self.soldOut = soldOut;
        self.cover = cover;
    },
    async fetchEventById(id){
        const data = await _fetchEventById(id);
        self.addEvent(data);
    }
}))

const EventList = types.model({
    events: types.array(Event)
})
.actions(self => ({
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
            id: 0,
            status: "",
            title: "",
            description: "",
            price: 0,
            soldOut: false,
            cover: ""
        })
    }
    return _eventStore;
}

export default useEvents;