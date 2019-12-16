import React from 'react'

import './mondal-day.styles.scss'

const ModalDay = ({ dayPlantData, date, setPlantHasBeenWatered }) => {

  return(
    <>
    {
      dayPlantData && dayPlantData.length ?
      <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalScrollableTitle">{date}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className='mb-0'>Please water the following plants:</p>
            <small className='mb-3 small-color'>* Touch plant to mark complete *</small>
            <div className="mb-3"></div>
            {
              dayPlantData.map(plant => {
                return (
                  <p className={`modal-plant ${plant.watered ? 'modal-plant-active' : null}`} onClick={() => setPlantHasBeenWatered(plant, plant.date)} key={plant.plantId}>{plant.title}</p>
                )
              })
            }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
      </div>
      :
      <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalScrollableTitle">{date}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>No plants to water today!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
      </div>
    }
    </>
  )
}

export default ModalDay