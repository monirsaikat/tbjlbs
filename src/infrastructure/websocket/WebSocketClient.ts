/**
 * Typed WebSocket client — thin wrapper around Laravel Echo + Pusher.
 * Responsibility: manage connection lifecycle and expose a type-safe
 * subscribe/unsubscribe API. Business logic stays in feature services.
 */
import type { WebSocketEventName, WebSocketEventPayload } from './events/websocket.events';

export type SubscriptionCallback<E extends WebSocketEventName> = (
  payload: WebSocketEventPayload<E>,
) => void;

export interface IWebSocketClient {
  connect(token: string): void;
  disconnect(): void;
  subscribe<E extends WebSocketEventName>(
    channel: string,
    event:   E,
    callback: SubscriptionCallback<E>,
  ): void;
  unsubscribe(channel: string): void;
  isConnected(): boolean;
}

export class WebSocketClient implements IWebSocketClient {
  private echo: unknown = null; // typed as `Echo` once the echo package is installed
  private connected = false;

  connect(_token: string): void {
    // initialise Laravel Echo with Pusher driver
    // this.echo = new Echo({ broadcaster: 'pusher', ... })
    this.connected = true;
  }

  disconnect(): void {
    // (this.echo as Echo).disconnect()
    this.echo     = null;
    this.connected = false;
  }

  subscribe<E extends WebSocketEventName>(
    _channel:  string,
    _event:    E,
    _callback: SubscriptionCallback<E>,
  ): void {
    // (this.echo as Echo).private(channel).listen(event, callback)
  }

  unsubscribe(_channel: string): void {
    // (this.echo as Echo).leave(channel)
  }

  isConnected(): boolean {
    return this.connected;
  }
}

export const webSocketClient = new WebSocketClient();
