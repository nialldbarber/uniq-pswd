export function copyToClipboard(text: string = ''): void {
  const copiedText = document.createElement('textarea');
  copiedText.innerText = text;
  document.body.appendChild(copiedText);
  copiedText.select();
  document.execCommand('copy');
  copiedText.remove();
}
