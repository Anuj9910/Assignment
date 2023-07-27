
let tasks, assets = [], mainObj = {};
let showObj = function() {
    for(let prop in mainObj) {
        console.log(mainObj[prop]);
    };
}
fetch("./project.json").then(function(res) {
    return res.json();
}).then(function (data) {
    console.log(data);
    tasks = data.tasks;
    assets = tasks[0].assets;
    mainObj = data;
    console.log("assets", assets);
    processAssets(assets);
    showObj();
}).catch(error => {console.log(error)});



function processAssets(assets){

    let completeTemplateArray = assets.map((asset)=>{
        
        if(asset.asset_content_type == 'video'){
            return `
            <section class="blocks" id="one" >
                            <div class="block-heading">
                                <p id="heading1">${asset.asset_title}</p>
                                <button class="openbtn" onclick="toogledes()" type="button" id="info">i</button>
                            </div>
                            <div class="description" id="description">
                                <p><strong>Description:</strong>${asset.asset_description}</p>
                            </div>
                            <iframe class="video" src="${asset.asset_content}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                        </section>
            `;
        }else  if(asset.asset_content_type == 'threadbuilder'){
            return `
            <section class="blocks" id="two">
            <div class="block-heading">
                <p id="heading2">' ${asset.asset_title}</p>
                <button class="openbtn" onclick="toogledes2()" type="button" id="info">i</button>
            </div>
            <div class="description" id="description2">
                <p><strong>Description:</strong> ${asset.asset_description}</p>
            </div>
            <div class="threadA">
                <button type="button" class="threadbtn" onclick="tooglethread()"><img id="threadbtn" style="transition: 0.5s;" src="assets/arrow.svg"></button>
                <p>Thread A</p>
            </div>
            <div class="collapsiblethread" id="collapsiblethread">
               <div class="subthread">Sub Thread 1
                <form class="textarea">
                    <textarea placeholder="Enter Text here"></textarea>
                </form>
               </div>
               <div class="subthread" id="subinter">Sub Interpretation 1
                <form class="textarea">
                    <textarea placeholder="Enter Text here"></textarea>
                </form>
               </div>
               <img class="icongrp" src="assets/icongroup.svg"> 
               <select class="select1">
                    <option>Select Category</option>
                    <option>Remark</option>
                    <option>Sub-argument</option>
                    <option>Sub-explanation</option>
                    <option>Core-principle</option>
               </select>
               <select class="select2">
                    <option>Select Process</option>
                    <option>Question</option>
                    <option>Analogy</option>
                    <option>Sarcasm</option>
                    <option>Insight</option>
                    <option>Counter-Example</option>
               </select>
               <button class="subbtn">+ Sub-thread</button>
               <div class="summary">Summary for Thread A
                <form class="textarea">
                    <textarea placeholder="Enter Text here"></textarea>
                </form>
               </div>
               <div class="threadcredit">
                <svg width="12" height="5" class="mr-2" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.13994 2.5C1.13994 1.645 1.974 0.949997 3 0.949997H5.4V0H3C1.344 0 0 1.12 0 2.5C0 3.88 1.344 5 3 5H5.4V4.05H3C1.974 4.05 1.13994 3.355 1.13994 2.5ZM3.6 3H8.4V2H3.6V3ZM9 0H6.6V0.949997H9C10.026 0.949997 10.8601 1.645 10.8601 2.5C10.8601 3.355 10.026 4.05 9 4.05H6.6V5H9C10.656 5 12 3.88 12 2.5C12 1.12 10.656 0 9 0Z" fill="#323232"></path>
                </svg>
                Thread Credit
                <svg width="15" height="13" class="ml-2 cursor-pointer" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7062 1.42383L11.7084 0.464013C11.0653 -0.154671 10.0181 -0.154671 9.37499 0.464013L7.16518 2.58979L0 9.48252V12.687H3.33116L10.5376 5.75459L12.7062 3.66851C13.3575 3.04982 13.3575 2.04252 12.7062 1.42383ZM2.64673 11.1006H1.64908V10.1409L8.7896 3.27192L9.78726 4.23164L2.64673 11.1006ZM6.5963 12.687L9.89445 9.51427H14.8417V12.687H6.5963Z" fill="#0029FF"></path></svg>
               </div>
               <select class="selectemotion">
                <option>Select Emotion</option>
                <option>Eureka Emphasis</option>
                <option>Blissfully Puzzled</option>
                <option>Spiritually Determined</option>
                <option>Upset & Motivated</option>
               </select>
               <button type="button" class="newthread">+ New Thread</button>
            </div>
            
        </section>`;
        }else  if(asset.asset_type == 'input_asset'){
            return `
            <section class="blocks" id="three">
            <div class="block-heading">
                <p id="heading3">${asset.asset_title}</p>
                <button type="button" id="info">i</button>
            </div>
            <div class="description" id="description3">
                <p><strong>Description :</strong> ${asset.asset_description}</p>
            </div>
            <div class="content">
                <h1>Title</h1>
                <img class="rectangle1" src="assets/Rectangle1.svg">
                <h2>Content</h2>
                <div class="rectangle2">
                    <ul class="list2">
                        <li>File</li>
                        <li>Edit</li>
                        <li>View</li>
                        <li>Insert</li>
                        <li>Format</li>
                        <li>Tools</li>
                        <li>Table</li>
                        <li>Help</li>
                    </ul>
                    <img class="leftarrow" src="assets/arrowleft.svg">
                    <img class="rightarrow" src="assets/arrowright.svg">
                    <img class="arrowexpand" src="assets/arrowexpand.svg">
                    <p>Paragraph</p>
                    <ul class="blackellipse">
                        <li><img src="assets/blackEllipse.svg"></li>
                        <li><img src="assets/blackEllipse.svg"></li>
                        <li><img src="assets/blackEllipse.svg"></li>
                    </ul>
                </div>
                <img id="rectangle2" src="assets/Rectangle2.svg">
            </div>
        </section>`
        }
        else if(asset.asset_type == 'display_asset' ){
            return `<section class="blocks" id="four">
            <div class="block-heading">
                <p id="heading4">${asset.asset_title}</p>
                <button type="button" id="info">i</button>
            </div>
            <div class="description" id="description4">
                <p><strong>Description :</strong> ${asset.asset_description} </p>
            </div>
            <iframe class="contentblock4" src="${asset.asset_content}"></iframe>
        </section>`
        }
    });

    let completeTemplate = completeTemplateArray.join("");

    let containerElement = document.getElementById("container");

    containerElement.innerHTML = completeTemplate;

}

function toogledes () {
    var element = document.getElementById("description");
    if(element.style.height == "0px") {
        element.style.height = "100px"
    }
    else {
        element.style.height = "0px";
    }
    var one = document.getElementById("one");
    if(one.style.height == "460px") {
        one.style.height = "540px"
    }
    else {
        one.style.height = "460px";
    }
}
function toogledes2 () {
    var element = document.getElementById("description2");
    if(element.style.height == "0px") {
        element.style.height = "100px"
    }
    else {
        element.style.height = "0px";
    }
    var one = document.getElementById("two");
    if(one.style.height == "460px") {
        one.style.height = "540px"
    }
    else {
        one.style.height = "460px";
    }
}

function expandboard () {
    var open = document.getElementById("expendedboard");
    if(open.style.width == "39px") {
        open.style.width = "0px";
    }
    else {
        open.style.width = "390px";
    }
}
function collapseboard () {
    var close = document.getElementById("expendedboard");
    if(close.style.width == "0px") {
        close.style.width = "390px"
    }
    else{
        close.style.width  = "0px";
        }
}
function tooglethread() {
    var element = document.getElementById("collapsiblethread");
    var img = document.getElementById("threadbtn");
    if(element.style.height == "0px") {
        element.style.height = "350px"
        img.style.transform = 'rotate(360deg)';
    }
    else {
        element.style.height = "0px";
        img.style.transform = 'rotate(180deg)';
    }
}