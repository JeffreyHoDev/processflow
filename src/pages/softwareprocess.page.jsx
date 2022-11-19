import './softwareprocess.styles.scss'
import { detailData } from '../data'
import Card from 'react-bootstrap/Card';

import { ReactComponent as RightArrow } from '../assets/caret-right-fill.svg'
import { ReactComponent as RightReturnArrow } from '../assets/arrow-return-right.svg'

const SoftwareProcessPage = () => {
    const { software_process } = detailData
    console.log(software_process)
    return (
        <>
            <div className='page-container'>
                <h1>{software_process.name}</h1>
                <div style={{display: 'grid', gridTemplateColumns: `repeat(${software_process.data.length}, 1fr)` }}>
                    {
                        software_process.data.map((mainmodule, index) => {
                            return (
                                <div>
                                    <div className='card-container'>
                                        <Card style={{ width: `${100/software_process.data.length}rem`, backgroundColor: 'red', color: 'white' }}>
                                            <Card.Body>
                                                <Card.Title>{`${index + 1} - ${mainmodule.module}`}</Card.Title>
                                                <Card.Text>
                                                Some quick example text 
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        {index === software_process.data.length-1 ? null : <RightArrow />}
                                    </div>
                                    {
                                            mainmodule.submodule.map((sub, subindex) => {
                                                return (
                                                    <div className='submodule'>
                                                        <RightReturnArrow />
                                                        <span className='submodule-list-item'>{`${index+1}.${subindex+1} - ${sub}`}</span>
                                                    </div>
                                                )
                                            })
                                    }
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default SoftwareProcessPage