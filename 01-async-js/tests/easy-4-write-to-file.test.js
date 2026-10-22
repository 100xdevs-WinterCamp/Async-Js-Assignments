const fs = require("fs");
const path = require("path");
const os = require("os");
const writeToFile = require("../easy/4-write-to-file");

describe("easy/4-write-to-file", () => {
  let tempDir;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "async-write-test-"));
  });

  afterEach(() => {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  test("writes content to a new file asynchronously", async () => {
    const filePath = path.join(tempDir, "new-file.txt");
    const content = "Testing asynchronous file write.";

    await writeToFile(filePath, content);

    expect(fs.existsSync(filePath)).toBe(true);
    const readContent = fs.readFileSync(filePath, "utf-8");
    expect(readContent).toBe(content);
  });

  test("overwrites existing content in an already existing file", async () => {
    const filePath = path.join(tempDir, "existing-file.txt");
    fs.writeFileSync(filePath, "Old content before overwrite", "utf-8");

    const newContent = "Brand new updated content!";
    await writeToFile(filePath, newContent);

    const readContent = fs.readFileSync(filePath, "utf-8");
    expect(readContent).toBe(newContent);
  });

  test("rejects when directory does not exist", async () => {
    const invalidPath = path.join(tempDir, "non-existent-subfolder", "file.txt");
    await expect(writeToFile(invalidPath, "content")).rejects.toThrow();
  });
});
