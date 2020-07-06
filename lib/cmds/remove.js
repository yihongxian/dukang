const { execSync } = require("child_process");

exports.command = "remove <type>";
exports.desc = "DuKang remove tags";
exports.handler = function(argv) {
  switch (argv.type) {
    case "tag":
      try {
        const tags = execSync("git tag", {
          encoding: "utf-8",
          // 隐藏子进程的控制台窗口 default: false
          windowsHide: true
        });

        console.log(`tags: ${tags}`);
      } catch (error) {
        throw new Error(`获取 tags 错误 `);
      }
    default:
      break;
  }
};
