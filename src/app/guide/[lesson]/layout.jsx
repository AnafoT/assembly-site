export default function Layout({ children, params }) {
    const lesson = params.lesson;
    return (
        <div>
            <h1>Welcome to Lesson {lesson}</h1>
            {children}
        </div>
    );
}

