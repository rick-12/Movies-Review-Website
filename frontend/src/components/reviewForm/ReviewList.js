import React from 'react'

const ReviewList = ({ reviewIds }) => {
    return (
        <div> {
            reviewIds?.map((reviewId) => {
                return (
                    <div key={reviewId.id}>
                        <p>{reviewId.body}</p>
                        <hr />
                    </div>
                )
            })
        }
        </div>
    )
}

export default ReviewList
