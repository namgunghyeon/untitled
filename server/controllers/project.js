import projectModel from '../model/project';

function getProjects(req, res) {
  projectModel.projects((error, response, body) => {
    res.send(body);
  });
}

export {
  getProjects,
};
