const parent = React.createElement('div', {id: 'parent'}, 
    [React.createElement('div', {id: 'child'}, 
        [
            React.createElement('h1', {id: 'heading1'}, 'Hello I\'m a heading'),
            React.createElement('h1', {id: 'heading2'}, 'Hello I\'m a heading 2')
        ]
    ),
    React.createElement('div', {id: 'child2'}, 
        [
            React.createElement('h1', {id: 'heading1'}, 'Hello I\'m a heading'),
            React.createElement('h1', {id: 'heading2'}, 'Hello I\'m a heading 2')
        ]
    )]
)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)