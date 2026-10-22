const fs = require("fs");
const path = require("path");
const os = require("os");
const { cleanFile, cleanString } = require("../medium/1-file-cleaner");

describe("medium/1-file-cleaner", () => {
  describe("cleanString helper", () => {
    test("removes multiple spaces between words", () => {
      const input = "hello     world    my    name   is       raman";
      expect(cleanString(input)).toBe("hello world my name is raman");
    });

    test("handles tabs, newlines, and trims edges", () => {
      const input = "   hello\t\tworld \n\n this   is \t a   test  ";
      expect(cleanString(input)).toBe("hello world this is a test");
    });

    test("handles already clean string", () => {
      expect(cleanString("hello world")).toBe("hello world");
    });
  });

  describe("cleanFile async operation", () => {
    let tempDir;
    let tempFilePath;

    beforeEach(() => {
      tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "async-cleaner-test-"));
      tempFilePath = path.join(tempDir, "dirty.txt");
    });

    afterEach(() => {
      if (fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, { recursive: true, force: true });
      }
    });

    test("reads file, cleans spaces, and writes back to same file", async () => {
      const dirtyContent = "hello     world    my    name   is       raman";
      fs.writeFileSync(tempFilePath, dirtyContent, "utf-8");

      const result = await cleanFile(tempFilePath);
      expect(result).toBe("hello world my name is raman");

      const fileOnDisk = fs.readFileSync(tempFilePath, "utf-8");
      expect(fileOnDisk).toBe("hello world my name is raman");
    });

    test("rejects when target file does not exist", async () => {
      const missingFile = path.join(tempDir, "missing.txt");
      await expect(cleanFile(missingFile)).rejects.toThrow();
    });
  });
});
