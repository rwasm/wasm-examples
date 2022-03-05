const js = import("hello-wasm");
js.then(js => {
  js.greet("WebAssembly");
});
