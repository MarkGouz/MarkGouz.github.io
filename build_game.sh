#!/bin/bash

emcc /Users/markgouzoulis/c++-lib/raylib-quickstart/src/main.cpp \
  -I/Users/markgouzoulis/c++-lib/raylib/src \
  -I/Users/markgouzoulis/c++-lib/raylib-quickstart/include \
  -L/Users/markgouzoulis/c++-lib/raylib/build_web/raylib \
  -lraylib \
  -o /Users/markgouzoulis/MarkGouz.github.io/public/game.html \
  -s USE_GLFW=3 \
  -s ASYNCIFY \
  -s FORCE_FILESYSTEM=1 \
  -s ALLOW_MEMORY_GROWTH=1 \
  -s EXPORTED_FUNCTIONS='["_main"]' \
  -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' \
  -std=c++17

