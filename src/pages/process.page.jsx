import './process.styles.scss'
import { detailData } from '../data'
import Card from 'react-bootstrap/Card';

import { ReactComponent as RightArrow } from '../assets/caret-right-fill.svg'
import { ReactComponent as RightReturnArrow } from '../assets/arrow-return-right.svg'

const ProcessPage = ({ page }) => {

    const data = detailData[page]

    return (
        <>
            <div className='page-container'>
                <h1>{data.name}</h1>
                <div style={{display: 'grid', gridTemplateColumns: `repeat(${data.data.length}, 1fr)` }}>
                    {
                        data.data.map((mainmodule, index) => {
                            return (
                                <div key={`module-${index}`}>
                                    <div className='card-container'>
                                        <Card className='cardFromRB' style={{ width: `${100/data.data.length}rem`, backgroundColor: 'red', color: 'white' }}>
                                            <Card.Body>
                                                <Card.Title>{`${index + 1} - ${mainmodule.module}`}</Card.Title>
                                                <Card.Text>
                                                    {mainmodule.desc} 
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        {index === data.data.length-1 ? null : <RightArrow />}
                                    </div>
                                    {
                                            mainmodule.submodule.map((sub, subindex) => {
                                                return (
                                                    <div className='submodule' key={`submodule-${subindex}`}>
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

export default ProcessPage