const fs = require("fs");
const path = require("path");
const os = require("os");
const readFromFile = require("../easy/3-read-from-file");

describe("easy/3-read-from-file", () => {
  let tempDir;
  let tempFilePath;
  const sampleContent = "Hello from Async JS Assignment!\nTesting fs.readFile.";

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "async-read-test-"));
    tempFilePath = path.join(tempDir, "sample.txt");
    fs.writeFileSync(tempFilePath, sampleContent, "utf-8");
  });

  afterEach(() => {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  test("returns a promise that resolves with file content", async () => {
    const content = await readFromFile(tempFilePath);
    expect(content).toBe(sampleContent);
  });

  test("correctly reads UTF-8 content with special characters and emojis", async () => {
    const utf8Content = "Special chars: café, naïve, 🚀, 100xdevs!";
    fs.writeFileSync(tempFilePath, utf8Content, "utf-8");

    const content = await readFromFile(tempFilePath);
    expect(content).toBe(utf8Content);
  });

  test("rejects with an error when file does not exist", async () => {
    const nonExistentPath = path.join(tempDir, "does-not-exist.txt");
    await expect(readFromFile(nonExistentPath)).rejects.toThrow();
  });
});
