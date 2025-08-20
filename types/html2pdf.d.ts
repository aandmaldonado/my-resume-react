declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    margin?: number | number[] | [number, number, number, number];
    filename?: string;
    image?: {
      type?: string;
      quality?: number;
    };
    enableLinks?: boolean;
    html2canvas?: {
      scale?: number;
      useCORS?: boolean;
      allowTaint?: boolean;
    };
    jsPDF?: {
      orientation?: string;
      unit?: string;
      format?: string | [number, number];
    };
  }

  interface Html2PdfInstance {
    from(element: HTMLElement): Html2PdfInstance;
    set(options: Html2PdfOptions): Html2PdfInstance;
    save(): Promise<void>;
    outputPdf(): Promise<Blob>;
    outputImg(): Promise<string>;
  }

  function html2pdf(): Html2PdfInstance;
  function html2pdf(options?: Html2PdfOptions): Html2PdfInstance;

  export = html2pdf;
}
