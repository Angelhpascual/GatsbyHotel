import {graphql, useStaticQuery} from 'gatsby'


const useRooms = () => {


    const data = useStaticQuery(graphql`

        query{
            allDatoCmsRoom{
            nodes{
                    title
                    content
                    image{
                    fluid(maxWidth: 1200){
                        ...GatsbyDatoCmsFluid
                }
                }
                    id
                    slug
                
            }
            }
        }

    `);

    return data.allDatoCmsRoom.nodes.map(room =>({
        title: room.title,
        id: room.id,
        content: room.content,
        image: room.image,
        slug: room.slug,
    }))

    
}
 
export default useRooms;


    
