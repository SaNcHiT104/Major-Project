import React from 'react'
import './Doctoreview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Doctoreview() {
  return (
    <div className="Doctoreview">
        <div className="Doctoreviewhead">Patient Reviews</div>
        <div className="contenttop">
            <div className="review">All reviews have been submitted by patients after seeing the provider.</div>
        </div>
        <div className="wrapper">
            <div className="box">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo porro praesentium provident repellendus autem neque nihil voluptates tempora id hic, beatae assumenda laboriosam amet odio voluptatem dicta error eligendi dolorum.</p>
                <div className="content">
                    <div className="info">
                        <div className="name">Archie</div>
                        <div className="job">Patient</div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                    <div className="image">
                        <img src="https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"></img>
                    </div>
                </div>
            </div>
            <div className="box">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo porro praesentium provident repellendus autem neque nihil voluptates tempora id hic, beatae assumenda laboriosam amet odio voluptatem dicta error eligendi dolorum.</p>
                <div className="content">
                    <div className="info">
                        <div className="name">Archie</div>
                        <div className="job">Patient</div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                    <div className="image">
                        <img src="https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"></img>
                    </div>
                </div>
            </div>
            <div className="box">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo porro praesentium provident repellendus autem neque nihil voluptates tempora id hic, beatae assumenda laboriosam amet odio voluptatem dicta error eligendi dolorum.</p>
                <div className="content">
                    <div className="info">
                        <div className="name">Archie</div>
                        <div className="job">Patient</div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                    <div className="image">
                        <img src="https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}
