import React from 'react'

const BoardForm = () => {
  return (
    <form className="new_board_form">
        <section>
            <h2>New Board: </h2>
            <div className="new_board_fields">
                <div>
                    <label htmlFor="title">Title</label>
                    <input name="title" value=""></input>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input name="name"></input>
                </div>
                <div>
                    {/* preview section */}
                </div>
                <button className="button new_board_submit" type="submit" value="add_board">Submit</button>
            </div>
        </section>
    </form>
  )
}

export default BoardForm;