import Server from 'socket.io';

export function startSocket(store, io) {
  store.subscribe(() => { 
    return io.emit('state', store.getState())
  });

  io.on('connection', (socket) => {
    socket.emit('state', store.getState());
  });

  io.on('get_inventory', (socket) => {
    socket.emit('inventory', store.getState().inventory);
  });
}