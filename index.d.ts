export interface FilePickerOptions {
  title?: string;
  chooseFileButtonTitle?: string;
}

export type FilePickerFile = {
  fileName: string;
  type: string;
  path: string;
  uri: string;
}

export type FilePickerCancel = {
  didCancel: boolean;
}

export type FilePickerError = {
  error: Error;
}

export type FilePickerResult =
  | FilePickerCancel
  | FilePickerError
  | FilePickerFile

declare class FilePickerManager {
  public static showFilePicker(
    callback: (result: FilePickerResult) => void
  ): void;

  public static showFilePicker(
    options: FilePickerOptions,
    callback: (result: FilePickerResult) => void
  ): void;

  public static showFilePicker(
    optionsOrCallback: FilePickerOptions | ((result: FilePickerResult) => void),
    callback?: (result: FilePickerResult) => void
  ): void;
}

export default FilePickerManager;
