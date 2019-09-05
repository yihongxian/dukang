const chalk = require("chalk");
const columnify = require("columnify");

const types = {
  feat: "新功能（HCB、KRY）",
  fix: "修补BUG（HCB、KRY）",
  docs: "修改文档（HCB、KRY）",
  style: "修改代码格式，不影响代码逻辑（HCB、KRY）",
  refactor: "重构代码，理论上不影响现有功能（HCB、KRY）",
  test: "增加修改测试用例（HCB、KRY）",
  chore: "构建过程或辅助工具的变动（HCB、KRY）",
  version: "版本发布（HCB）",
  deps: "升级依赖（KRY）",
  perf: "提升性能（KRY）",
};

exports.command = "remind <type>";
exports.desc = "DuKang remind message";
exports.handler = function (argv) {
  switch (argv.type) {
    case "commit":
      console.group('');
      console.log(
        columnify(
          Object.keys(types).map(key => ({
            operate: chalk.yellow(key),
            describe: chalk.green(types[key])
          })).concat({}),
          {
            minWidth: 20,
            showHeaders: false
          }
        )
      );
      console.groupEnd();
    default:
      break;
  }
};
