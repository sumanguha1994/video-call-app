'use strict';

const appRoot = setAppRoot('video-call-app', 'video-call-app');
const spinnerClass = 'fa fa-spinner faa-spin animated';

function setAppRoot(devFolderName, prodFolderName){
    var hostname = window.location.hostname;
    var devFolder = devFolderName ? devFolderName+"/" : "";
    var prodFolder = prodFolderName ? prodFolderName+"/" : "";
    var appRoot = "";
    
    if(hostname === "localhost" || (hostname.search("192.168.") !== -1)  || (hostname.search("127.0.0.") !== -1)){
        appRoot = window.location.origin+"/"+devFolder;
    }else{
        appRoot = window.location.origin+"/"+prodFolder;
    }
    return appRoot;
}
