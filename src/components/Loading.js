import React from 'react'

const Loading = () => {
    return (
        <>
            <section className="hero is-large has-background-white-ter is-fullheight  has-background-grey-light">
                <div className="hero-body pt-0">
                    <div className="is-justify-content-center mx-auto px-auto">
                        <h1 className="title is-2 pt-0">Loading...</h1>
                        <progress class="progress is-medium is-dark" max="100">45%</progress>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Loading
