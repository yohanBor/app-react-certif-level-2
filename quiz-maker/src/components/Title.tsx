

interface TitleProps {
    title : string
}

const Title = ({title}: TitleProps) => {
    return <h1 className="text-3xl mb-8 text-center">{title}</h1>;
}

export default Title;