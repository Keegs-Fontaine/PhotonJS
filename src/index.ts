import { createServer, IncomingMessage, ServerResponse } from "http"
import type { ListenerRegister } from "../types/listenerTypes"

export default class Photon {
    private listeners: ListenerRegister

    constructor() {
        this.listeners = { GET: [{}], POST: [{}] }
    }

    public get(
        url: string,
        callback: (req: IncomingMessage, res: ServerResponse) => {}
    ) {}
}
