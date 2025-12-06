"use client";

import { useMemo, useState } from "react";

type ChannelMode = "buffered" | "unbuffered";

type Event = {
  id: number;
  message: string;
  type: "send" | "receive" | "blocked-send" | "blocked-receive";
  detail: string;
};

export function ChannelVisualizer() {
  const [mode, setMode] = useState<ChannelMode>("buffered");
  const [capacity, setCapacity] = useState(2);
  const [buffer, setBuffer] = useState<string[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [armedReceiver, setArmedReceiver] = useState(false);
  const [messageCounter, setMessageCounter] = useState(1);

  const addEvent = (event: Omit<Event, "id">) => {
    setEvents((prev) => [
      { ...event, id: prev.length + 1 },
      ...prev.slice(0, 6),
    ]);
  };

  const send = () => {
    const msg = `v${messageCounter}`;
    setMessageCounter((n) => n + 1);
    if (mode === "buffered") {
      if (buffer.length < capacity) {
        setBuffer((prev) => [...prev, msg]);
        addEvent({
          type: "send",
          message: msg,
          detail: `queued (len=${buffer.length + 1}/${capacity})`,
        });
      } else {
        addEvent({
          type: "blocked-send",
          message: msg,
          detail: "blocked (buffer full)",
        });
      }
    } else {
      if (armedReceiver) {
        addEvent({
          type: "send",
          message: msg,
          detail: "delivered (unbuffered, receiver ready)",
        });
        setArmedReceiver(false);
      } else {
        addEvent({
          type: "blocked-send",
          message: msg,
          detail: "blocked (no receiver on unbuffered channel)",
        });
      }
    }
  };

  const receive = () => {
    if (mode === "buffered") {
      if (buffer.length > 0) {
        const [head, ...rest] = buffer;
        setBuffer(rest);
        addEvent({
          type: "receive",
          message: head,
          detail: `dequeued (len=${rest.length}/${capacity})`,
        });
      } else {
        addEvent({
          type: "blocked-receive",
          message: "-",
          detail: "blocked (empty buffer)",
        });
      }
    } else {
      setArmedReceiver(true);
      addEvent({
        type: "receive",
        message: "-",
        detail: "receiver armed; next send will deliver immediately",
      });
    }
  };

  const bufferSlots = useMemo(() => {
    return new Array(mode === "buffered" ? capacity : 1)
      .fill(null)
      .map((_, idx) => buffer[idx] ?? "·");
  }, [buffer, capacity, mode]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-blue-500/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
            Channels
          </p>
          <h3 className="text-lg font-semibold text-white">
            Send/Receive Visual Debugger
          </h3>
          <p className="text-sm text-slate-300">
            See buffered vs unbuffered behavior, blocking, and readiness.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-200">
          <button
            onClick={() => setMode("buffered")}
            className={`rounded-full px-3 py-1 font-semibold transition ${
              mode === "buffered"
                ? "bg-white text-slate-900"
                : "border border-white/15 text-white"
            }`}
          >
            Buffered
          </button>
          <button
            onClick={() => setMode("unbuffered")}
            className={`rounded-full px-3 py-1 font-semibold transition ${
              mode === "unbuffered"
                ? "bg-white text-slate-900"
                : "border border-white/15 text-white"
            }`}
          >
            Unbuffered
          </button>
        </div>
      </div>

      {mode === "buffered" ? (
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-300">
          <span>Capacity</span>
          {[1, 2, 4, 8].map((cap) => (
            <button
              key={cap}
              onClick={() => {
                setCapacity(cap);
                setBuffer((prev) => prev.slice(0, cap));
              }}
              className={`rounded-md px-3 py-1 text-xs font-semibold transition ${
                capacity === cap
                  ? "bg-white text-slate-900"
                  : "border border-white/15 text-white"
              }`}
            >
              {cap}
            </button>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm text-slate-300">
          Unbuffered: send blocks until a receiver is armed.
        </p>
      )}

      <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr,0.8fr]">
        <div className="rounded-xl border border-white/10 bg-black/30 p-4">
          <div className="flex items-center justify-between text-sm text-slate-200">
            <span className="font-semibold">Channel State</span>
            <span className="text-xs text-slate-400">
              {mode === "buffered"
                ? `len=${buffer.length} cap=${capacity}`
                : "unbuffered"}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2 text-center text-sm text-slate-100">
            {bufferSlots.map((slot, idx) => (
              <div
                key={idx}
                className={`rounded-lg border px-3 py-4 ${
                  slot === "·"
                    ? "border-dashed border-white/15 text-slate-500"
                    : "border-emerald-400/40 bg-emerald-500/10 text-emerald-100"
                }`}
              >
                {slot}
              </div>
            ))}
          </div>
          {mode === "unbuffered" ? (
            <div className="mt-3 rounded-lg border border-amber-400/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-100">
              Receiver {armedReceiver ? "armed" : "not waiting"}; send will{" "}
              {armedReceiver ? "succeed" : "block"}.
            </div>
          ) : null}
        </div>

        <div className="space-y-3">
          <div className="flex gap-2">
            <button
              onClick={send}
              className="flex-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5"
            >
              Send
            </button>
            <button
              onClick={receive}
              className="flex-1 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30"
            >
              Receive / Arm
            </button>
            <button
              onClick={() => {
                setBuffer([]);
                setEvents([]);
                setArmedReceiver(false);
              }}
              className="rounded-full border border-white/10 px-3 py-2 text-xs text-slate-200 transition hover:border-white/30"
            >
              Reset
            </button>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-xs text-slate-100">
            <div className="mb-2 font-semibold text-slate-200">Events</div>
            <div className="space-y-2">
              {events.length === 0 ? (
                <div className="rounded-md border border-white/5 bg-white/5 px-3 py-2 text-slate-500">
                  No events yet.
                </div>
              ) : (
                events.map((e) => (
                  <div
                    key={e.id}
                    className={`rounded-md border px-3 py-2 ${
                      e.type === "send"
                        ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
                        : e.type === "receive"
                          ? "border-blue-400/30 bg-blue-500/10 text-blue-100"
                          : "border-amber-400/30 bg-amber-500/10 text-amber-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">
                        {e.type.replace("-", " ")}
                      </span>
                      <span className="font-mono text-[11px]">{e.message}</span>
                    </div>
                    <p className="text-[12px] text-white/80">{e.detail}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

