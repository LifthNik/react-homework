export default function Post ({posts}) {

    console.log(posts)
    return (<div className='post'>

            <h3>

                Helo{posts.title}

            </h3>


        </div>
    );};