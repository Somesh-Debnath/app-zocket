import { useState } from "react";

export default function ToggleBlue() {
    const [enabled, setEnabled] = useState(false);

    return (
        
            <div className="flex ">
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        name="yex"
                        checked={enabled}
                        readOnly
                        value='1'
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-40 h-12 border-[1px] border-gray-200 bg-white rounded-full peer 
                         peer-focus:ring-green-300  before:content-['zkxnkv']
                        peer-checked:after:translate-x-full peer-checked:after:border-white 
                        after:content-['greeen']
                         after:absolute after:top-0.5 after:left-[2px] after:bg-[#0F6EFF]
                          after:border-gray-300 
                         after:border after:rounded-full after:h-12 after:w-20 after:transition-all
                          peer-checked:bg-white"
                    ></div>


                   
                </label>

            </div>
        
    );
}