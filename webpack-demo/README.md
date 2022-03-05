# Webpack Demo

[[MDN] 编译 Rust 为 WebAssembly](https://developer.mozilla.org/zh-CN/docs/WebAssembly/Rust_to_wasm)

## 快速开始

### 环境安装

- [Install Rust](https://www.rust-lang.org/install.html)
- [wasm-pack](https://github.com/rustwasm/wasm-pack)
- [Node.js](https://nodejs.org/en/)

### 创建 Rust 包

> 生成项目

```bash
cargo new --lib hello-wasm
    Created library `hello-wasm` package
```

> 编辑 src/lib.rs

```rs
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

> 编辑 Cargo.toml

```toml
[package]
name = "hello-wasm"
version = "0.1.0"
description = "A sample project with wasm-pack"
license = "MIT"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

### 构建 Rust 包

```bash
wasm-pack build hello-wasm
```
