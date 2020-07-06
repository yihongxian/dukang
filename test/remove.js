const prompts = require("prompts");

const { execSync } = require("child_process");

const fs = require("fs");

function readSyncByfs() {
  const tagResult = execSync("git tag", { encoding: "utf-8" });

  const tagOptions = tagResult
    .split("\n")
    .filter(Boolean)
    .map((tag) => ({
      title: tag,
      value: tag,
    }));

  if (!tagOptions.length) {
    return;
  }

  (async () => {
    const response = await prompts({
      type: "multiselect",
      name: "tag",
      message: "请选择",
      choices: tagOptions,
    });

    console.log(response.tag, "response.tag");

    if (response.tag.length) {
      response.tag.forEach((tag) => {
        const result = execSync(`git tag -d ${tag}`, {
          encoding: "utf-8",
        });
        console.log(result);
        process.stdout.write(`tag: ${tag} 删除成功！\n`);
      });
    } else {
      process.stdout.write("退出");
    }
  })();

  // process.stdin.setEncoding("utf8");

  // process.stdin.on("readable", () => {
  //   let chunk;
  //   console.log("read\n");
  //   // 使用循环确保我们读取所有的可用数据。
  //   while (((chunk = process.stdin.read()), chunk) !== null) {
  //     console.log(chunk);
  //     console.log(chunk.trim().length);
  //     console.log(typeof chunk);
  //     const tagName = tags[parseInt(chunk)];
  //     const result = execSync(`git tag -d ${tagName}`, {
  //       encoding: "utf-8",
  //     });
  //     process.stdout.write(`tag: ${tagName} 删除成功！\n`);
  //     console.log(result);
  //   }
  // });

  // process.stdin.on("end", () => {
  //   process.stdout.write("结束");
  // });

  // process.stdout.write(tips);
  // process.stdin.pause();
  // response = fs.readSync(process.stdin.fd, 1000, 0, "utf8");
  // process.stdin.end();
  // return response[0].trim();
}

readSyncByfs();

// try {
//   const tags = execSync("git tag", {
//     encoding: "utf-8",
//     // 隐藏子进程的控制台窗口 default: false
//     windowsHide: true
//   });

//   console.log(tags.split("\n").filter(Boolean));
// } catch (error) {
//   throw new Error(`获取 tags 错误 `);
// }
