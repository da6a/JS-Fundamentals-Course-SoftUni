function extractFile(input) {
    let workingArr = input.split('\\');
    let fileName = workingArr.pop().split('.');
    let extencion = fileName.pop();
    if (fileName.length > 2) {
        extencion = fileName.pop();
    }
    console.log(`File name: ${fileName.join('.')}`);
    console.log(`File extension: ${extencion}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')