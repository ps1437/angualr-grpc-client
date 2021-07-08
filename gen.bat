PROTO_DIR="./src/app/proto"
PROTOC_GEN_TS_PATH="C:\Users\1030200\AppData\Roaming\npm\protoc-gen-ts.cmd"
GRPC_TOOLS_NODE_PROTOC_PLUGIN="C:\Users\1030200\AppData\Roaming\npm\grpc_tools_node_protoc_plugin.cmd"
GRPC_TOOLS_NODE_PROTOC="C:\Users\1030200\AppData\Roaming\npm\grpc_tools_node_protoc.cmd"
OUTPUT_DIR="./ts/_proto"

#!/bin/bash
protoc \
  --plugin="${PROTOC_GEN_TS_PATH}" \
    -I ./proto \
  --js_out=import_style=commonjs,binary:./ts/_proto \
  --grpc-web_out=import_style=commonjs:./ts/_proto \
  --ts_out=service=grpc-web:./ts/_proto \
  ./src/app/proto/todo-service.proto