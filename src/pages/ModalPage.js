import { useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal"


function ModalPage() {

    const [modalVisible, setModalVisible] = useState(false)

    // if (modalVisible){
    //     document.querySelector("body").style.overflow = "hidden";
    // }else{
    //     document.querySelector("body").style.overflow = "visible";
    // }



    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi neque, venenatis ac pulvinar nec, fermentum sed nibh. Donec nec dolor mi. Ut malesuada rutrum nisl eget blandit. Duis interdum tortor lorem, vel bibendum arcu semper eget. In metus ex, pellentesque non auctor eget, feugiat at neque. Sed consequat et felis id feugiat. Vestibulum ultrices nulla nisl, ac aliquam leo vestibulum vitae. Aenean vel feugiat ipsum. Praesent ut sem finibus, auctor turpis sed, facilisis nibh. In sit amet tristique enim, eget varius elit. Nam ornare et eros eu rhoncus. Morbi mattis lectus non congue congue. Sed facilisis facilisis libero ac efficitur. Cras sed elit enim."

    const actionBar = <Button onClick={() => { setModalVisible(false) }} success className=" px-4 font-bold rounded">OK</Button>
    return (
        <div>

            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <Button primary rounded outline onClick={() => { setModalVisible(!modalVisible) }} >Show Modal</Button>
            {modalVisible && <Modal onClose={() => { setModalVisible(false) }} actionBar={actionBar}><p>please sign in</p></Modal>}

        </div>
    )
}

export default ModalPage