// const express = require('express');
// const router = express.Router();
// const Project = require('../models/Project');
// const authMiddleware = require('../middleware/authMiddleware');

// // Get all projects
// router.get('/', async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.json(projects);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Add project
// router.post('/', authMiddleware, async (req, res) => {
//   try {
//     const project = new Project(req.body);
//     await project.save();
//     res.status(201).json(project);
//   } catch (err) {
//     res.status(400).json({ message: 'Invalid data' });
//   }
// });

// // Update project
// router.put('/:id', authMiddleware, async (req, res) => {
//   try {
//     const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!project) return res.status(404).json({ message: 'Project not found' });
//     res.json(project);
//   } catch (err) {
//     res.status(400).json({ message: 'Invalid data' });
//   }
// });

// // Delete project
// router.delete('/:id', authMiddleware, async (req, res) => {
//   try {
//     const project = await Project.findByIdAndDelete(req.params.id);
//     if (!project) return res.status(404).json({ message: 'Project not found' });
//     res.json({ message: 'Project deleted' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const Project = require('../models/Project');
// const authMiddleware = require('../middleware/authMiddleware');

// router.get('/', async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.json(projects);
//   } catch (err) {
//     console.error('Get projects error:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.post('/', authMiddleware, async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     if (!title || !description) {
//       return res.status(400).json({ error: 'Title and description are required' });
//     }
//     const project = await Project.create({ title, description });
//     res.status(201).json(project);
//   } catch (err) {
//     console.error('Create project error:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.put('/:id', authMiddleware, async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const project = await Project.findByIdAndUpdate(
//       req.params.id,
//       { title, description },
//       { new: true, runValidators: true }
//     );
//     if (!project) {
//       return res.status(404).json({ error: 'Project not found' });
//     }
//     res.json(project);
//   } catch (err) {
//     console.error('Update project error:', err);
//     res.status(400).json({ error: 'Failed to update project' });
//   }
// });

// router.delete('/:id', authMiddleware, async (req, res) => {
//   try {
//     const project = await Project.findByIdAndDelete(req.params.id);
//     if (!project) {
//       return res.status(404).json({ error: 'Project not found' });
//     }
//     res.json({ message: 'Project deleted' });
//   } catch (err) {
//     console.error('Delete project error:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });


// const express = require('express');
// const router = express.Router();
// const Project = require('../models/Project');
// const authMiddleware = require('../middleware/authMiddleware');
// const upload = require('../config/multer');

// router.get('/', async (req, res) => {
//   try {
//     const projects = await Project.find().select('-images.data'); // Exclude image data for list
//     res.json(projects);
//   } catch (err) {
//     console.error('Get projects error:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.get('/:id/image/:index', async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);
//     if (!project || !project.images[req.params.index]) {
//       return res.status(404).json({ error: 'Image not found' });
//     }
//     res.set('Content-Type', project.images[req.params.index].contentType);
//     res.send(project.images[req.params.index].data);
//   } catch (err) {
//     console.error('Get image error:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.post('/', authMiddleware, upload.array('images', 5), async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     if (!title || !description) {
//       return res.status(400).json({ error: 'Title and description are required' });
//     }

//     // Process uploaded images
//     const images = req.files.map(file => ({
//       data: file.buffer,
//       contentType: file.mimetype,
//     }));

//     const project = await Project.create({ title, description, images });
//     // Return project without image data
//     const projectResponse = await Project.findById(project._id).select('-images.data');
//     res.status(201).json(projectResponse);
//   } catch (err) {
//     console.error('Create project error:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.put('/:id', authMiddleware, upload.array('images', 5), async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const updateData = { title, description };

//     // Process new images if provided
//     if (req.files && req.files.length > 0) {
//       updateData.images = req.files.map(file => ({
//         data: file.buffer,
//         contentType: file.mimetype,
//       }));
//     }

//     const project = await Project.findByIdAndUpdate(req.params.id, updateData, {
//       new: true,
//       runValidators: true,
//     }).select('-images.data');
//     if (!project) {
//       return res.status(404).json({ error: 'Project not found' });
//     }
//     res.json(project);
//   } catch (err) {
//     console.error('Update project error:', err);
//     res.status(400).json({ error: 'Failed to update project' });
//   }
// });

// router.delete('/:id', authMiddleware, async (req, res) => {
//   try {
//     const project = await Project.findByIdAndDelete(req.params.id);
//     if (!project) {
//       return res.status(404).json({ error: 'Project not found' });
//     }
//     res.json({ message: 'Project deleted' });
//   } catch (err) {
//     console.error('Delete project error:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Project = require('../models/Project');
// const authMiddleware = require('../middleware/authMiddleware');
// const upload = require('../config/multer');

// router.get('/', async (req, res) => {
//   try {
//     const projects = await Project.find().select('-images.data'); // Exclude image data for list
//     res.json(projects);
//   } catch (err) {
//     console.error('Get projects error:', err.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.get('/:id/image/:index', async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);
//     if (!project) {
//       console.warn(`Project not found for ID: ${req.params.id}`);
//       return res.status(404).json({ error: 'Project not found' });
//     }
//     const index = parseInt(req.params.index, 10);
//     if (isNaN(index) || index < 0 || !project.images[index]) {
//       console.warn(`Image not found for project ID: ${req.params.id}, index: ${index}`);
//       return res.status(404).json({ error: 'Image not found' });
//     }
//     res.set('Content-Type', project.images[index].contentType);
//     res.send(project.images[index].data);
//   } catch (err) {
//     console.error(`Get image error for project ID: ${req.params.id}, index: ${req.params.index}`, err.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.post('/', authMiddleware, upload.array('images', 5), async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     if (!title || !description) {
//       return res.status(400).json({ error: 'Title and description are required' });
//     }

//     // Process uploaded images
//     const images = req.files.map(file => ({
//       data: file.buffer,
//       contentType: file.mimetype,
//     }));

//     const project = await Project.create({ title, description, images });
//     // Return project without image data
//     const projectResponse = await Project.findById(project._id).select('-images.data');
//     res.status(201).json(projectResponse);
//   } catch (err) {
//     console.error('Create project error:', err.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.put('/:id', authMiddleware, upload.array('images', 5), async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const updateData = { title, description };

//     // Process new images if provided
//     if (req.files && req.files.length > 0) {
//       updateData.images = req.files.map(file => ({
//         data: file.buffer,
//         contentType: file.mimetype,
//       }));
//     }

//     const project = await Project.findByIdAndUpdate(req.params.id, updateData, {
//       new: true,
//       runValidators: true,
//     }).select('-images.data');
//     if (!project) {
//       return res.status(404).json({ error: 'Project not found' });
//     }
//     res.json(project);
//   } catch (err) {
//     console.error('Update project error:', err.message);
//     res.status(400).json({ error: 'Failed to update project' });
//   }
// });

// router.delete('/:id', authMiddleware, async (req, res) => {
//   try {
//     const project = await Project.findByIdAndDelete(req.params.id);
//     if (!project) {
//       return res.status(404).json({ error: 'Project not found' });
//     }
//     res.json({ message: 'Project deleted' });
//   } catch (err) {
//     console.error('Delete project error:', err.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../config/multer');

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().select('-images.data'); // Exclude image data for list
    res.json(projects);
  } catch (err) {
    console.error('Get projects error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:id/image/:index', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      console.warn(`Project not found for ID: ${req.params.id}`);
      return res.status(404).json({ error: 'Project not found' });
    }
    const index = parseInt(req.params.index, 10);
    if (isNaN(index) || index < 0 || !project.images[index]) {
      console.warn(`Image not found for project ID: ${req.params.id}, index: ${index}`);
      return res.status(404).json({ error: 'Image not found' });
    }
    res.set('Content-Type', project.images[index].contentType);
    res.send(project.images[index].data);
  } catch (err) {
    console.error(`Get image error for project ID: ${req.params.id}, index: ${req.params.index}`, err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/', authMiddleware, upload.array('images', 5), async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    // Process uploaded images
    const images = req.files.map(file => ({
      data: file.buffer,
      contentType: file.mimetype,
    }));

    const project = await Project.create({ title, description, images });
    // Return project without image data
    const projectResponse = await Project.findById(project._id).select('-images.data');
    res.status(201).json(projectResponse);
  } catch (err) {
    console.error('Create project error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

router.put('/:id', authMiddleware, upload.array('images', 5), async (req, res) => {
  try {
    const { title, description } = req.body;
    const updateData = { title, description };

    // Process new images if provided
    if (req.files && req.files.length > 0) {
      updateData.images = req.files.map(file => ({
        data: file.buffer,
        contentType: file.mimetype,
      }));
    }

    const project = await Project.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    }).select('-images.data');
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    console.error('Update project error:', err.message);
    res.status(400).json({ error: 'Failed to update project' });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json({ message: 'Project deleted' });
  } catch (err) {
    console.error('Delete project error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;