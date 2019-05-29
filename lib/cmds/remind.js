const chalk = require("chalk");
const columnify = require("columnify");

const types = {
  feat: "新功能（feature）",
  fix: "修补bug",
  docs: "文档（documentation）",
  style: "格式（不影响代码运行的变动）",
  refactor: "重构（即不是新增功能，也不是修改bug的代码变动）",
  test: "增加测试",
  chore: "构建过程或辅助工具的变动",
  version: "版本发布"
};

exports.command = "remind <type>";
exports.desc = "DuKang remind message";
exports.handler = function(argv) {
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
