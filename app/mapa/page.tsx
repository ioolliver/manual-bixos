"use client";

import ContentSection from "@/components/ContentSection";
import Navbar from "@/components/Navbar";

import MapaIMG from "@/assets/mapa.png";
import Image from "next/image";
import getDeviceType from "@/utils/getDeviceType";
import useImgMapArea from "@/utils/ImgMapArea";
import MapArea from "@/components/MapArea";

import mapLocations from "@/assets/map-info.json"
import { useEffect, useState } from "react";

import ReactModal from "react-modal"

export default function Page() {
    ReactModal.setAppElement("body")
    useImgMapArea() // Responsive coords map

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [placeName, setPlaceName] = useState("")
    const [placeDescription, setPlaceDescription] = useState("")
    const [defaultZoom, setDefaultZoom] = useState(300)

    function showModal(name : string, description : string) {
        setPlaceName(name)
        setPlaceDescription(description)
        openModal()
    }

    function openModal() {
        setIsModalOpen(true)
    }
    function closeModal() {
        setIsModalOpen(false)
    }

    useEffect(() => {
        if(getDeviceType(navigator.userAgent) == "desktop") setDefaultZoom(150)
    }, [])

    return <div className="main">
        <Navbar previous="nomenclatura" next="cafe" />
        <div className="content">
            <ContentSection animationType="from-left">
                <h1>🗺️ Mapa</h1>
            </ContentSection>
            <ContentSection animationType="from-left-delay">
                <p>Este é um mapa interativo para você se guiar pelo campus da ETESP. Ao clicar em algum lugar rosa, uma janela será aberta mostrando mais informações sobre este local. Ande pelo mapa a vontade.</p>
            </ContentSection>
            <div id="map-box">
                <img style={{width: defaultZoom + "%"}} src="/mapa.png" alt="Mapa da ETESP" useMap="#etespmap" />
                <map name="etespmap">
                    { 
                    mapLocations.map(l => 
                        <MapArea 
                        key={l.id}
                        name={l.name} 
                        description={l.description} 
                        coords={l.coords} 
                        onAreaClick={showModal} />
                    ) 
                    }
                </map>
            </div>
        </div>
        <ReactModal
        isOpen={isModalOpen}
        >
            <div id="modal-box">
                <h1>{placeName}</h1>
                <p>{placeDescription}</p>
                <button onClick={closeModal}>Voltar</button>
            </div>
        </ReactModal>
    </div> 
}