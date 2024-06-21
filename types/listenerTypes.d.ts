type Verb = "GET" | "POST"
type RoutePair = { [key: string]: () => {} }

// This is the data structure which will contain all of an application's routes.
// Each HTTP verb (right now only GET and POST) will be a key in this object.
// Their respective value pairs will be an array of listener objects, where each key is a url,
// And each value is an associated function to call when a request is sent to that url.
export type ListenerRegister = {
    [key in Verb]: RoutePair[]
}
