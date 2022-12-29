import mitt from "mitt";
const emitter = mitt();
const bus: any = {
  $emit: emitter.emit,
  $on: emitter.on,
  $off: emitter.off,
};
export { bus };
