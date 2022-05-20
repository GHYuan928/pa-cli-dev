#!/usr/bin/env node
const importlocal = require("import-local");
// 如果传入 __filename 代表加载本地脚手架文件
if (importlocal(__filename)) {
  require("npmlog").info("cli", "正在使用 pa-cli-dev 本地版本");
} else {
  require("../lib")();
}
