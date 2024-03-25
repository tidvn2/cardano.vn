const convertIframe = function (regularLink: string) {
    return regularLink.replace("watch?v=", "embed/");
};

export default convertIframe;
