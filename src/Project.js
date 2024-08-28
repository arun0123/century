// src/components/Projects.js
import React, { useState } from 'react';
import Modal from './Model';
import Carousel from './Carousel';

const Projects = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <section className="projects" id="projects">
            <h2>My Projects</h2>
            <Carousel />
            {/* <button onClick={handleOpenModal}>Open Modal</button>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                content={<div><h3>Modal Content</h3><p>Details about the project or other content.</p></div>}
            /> */}
        </section>
    );
}

export default Projects;
