import { CommonOpts, LOGGER } from "../api";
import { Stream } from "../stream";
import { optsWithID } from "../utils/idgen";
import { makeWorker } from "../utils/worker";

export interface FromWorkerOpts extends CommonOpts {
    /**
     * If true, the worker will be terminated when the stream
     * is being closed.
     *
     * @defaultValue true
     */
    terminate: boolean;
}

/**
 * Returns a {@link Stream} which adds `message` and `error` event
 * listeners to given `worker` and then emits received values.
 *
 * @remarks
 * If `terminate` is true (default), the worker will be terminated when
 * the stream is being closed (either directly or indirectly, i.e. if
 * the user called {@link ISubscriber.done} on the stream or the last
 * child subscription has unsubscribed, depending on
 * {@link CommonOpts | config options}).
 *
 * As with {@link postWorker}, the `worker` can be an existing `Worker`
 * instance, a JS source code `Blob` or an URL string. In the latter two
 * cases, a worker is created automatically.
 *
 * @example
 * ```ts
 *
 * ```
 *
 * @param worker -
 * @param opts -
 */
export const fromWorker = <T>(
    worker: Worker | Blob | string,
    opts?: Partial<FromWorkerOpts>
) => {
    const _worker = makeWorker(worker);
    opts = optsWithID("worker", opts);
    return new Stream<T>((stream) => {
        const ml = (e: MessageEvent) => {
            stream.next(e.data);
        };
        const el = (e: MessageEvent) => {
            stream.error(e.data);
        };
        _worker.addEventListener("message", ml);
        _worker.addEventListener("error", <EventListener>el);
        return () => {
            _worker.removeEventListener("message", ml);
            _worker.removeEventListener("error", <EventListener>el);
            if (opts!.terminate !== false) {
                LOGGER.info("terminating worker", _worker);
                _worker.terminate();
            }
        };
    }, opts);
};
