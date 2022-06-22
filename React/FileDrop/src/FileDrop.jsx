import React from "react";
import "./FileDrop.css";

export function FileDrop(props) {
    const [ drag, setDrag ] = React.useState(false);
    const [ filename, setFilename ] = React.useState('');
    const [ preview, setPreview ] = React.useState("");
    let dropRef = React.createRef();
    let dragCounter = 0;

    const handleDrag = (e) => {
        // console.log(e)
        e.preventDefault();
        e.stopPropagation();
        
    };

    const handleDragIn = e => {
        e.preventDefault();
        e.stopPropagation();
        dragCounter++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) setDrag(true);
    };

    const handleDragOut = e => {
        e.preventDefault();
        e.stopPropagation();
        dragCounter--;
        if (dragCounter === 0) setDrag(false);
    };

    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        setDrag(false);


        const [ file ] = e.target.files || e.dataTransfer.files;

        uploadFile(file);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            props.handleDrop(e.dataTransfer.files[ 0 ]);
            setFilename(e.dataTransfer.files[ 0 ].name);
            e.dataTransfer.clearData();
            dragCounter = 0;
        }
    };

    function uploadFile(file) {
        const reader = new FileReader();
        reader.readAsBinaryString(file);

        reader.onload = () => {
            // this is the base64 data
            const fileRes = btoa(reader.result);
            console.log(`data:image/jpg;base64,${fileRes}`);
            setPreview(`data:image/jpg;base64,${fileRes}`);
        };

        reader.onerror = () => {
            console.log("There is a problem while uploading...");
        };
    }

    React.useEffect(() => {
        let div = dropRef.current;
        div.addEventListener("dragenter", handleDragIn);
        div.addEventListener("dragleave", handleDragOut);
        div.addEventListener("dragover", handleDrag);
        div.addEventListener("drop", handleDrop);
        return function cleanup() {
            div.removeEventListener("dragenter", handleDragIn);
            div.removeEventListener("dragleave", handleDragOut);
            div.removeEventListener("dragover", handleDrag);
            div.removeEventListener("drop", handleDrop);
        };
    });

    return (
        <div className="fileDrop_Container"> 
        <div
            ref={ dropRef }
            className={
                drag ? "filedrop drag" : filename ? "filedrop ready" : "filedrop"
            }
        >
                { filename && !drag ? <div>{ filename }</div> : <div>Drop Image here!</div> }
        </div>
            <div style={{width:"45%", margin : "20px auto"}}>
            <img src={ preview } alt="" />
            </div>
        </div>
    );
}

// className = { `upload${highlight ? " is-highlight" : "drop" ? " is-drop" : ""}` }