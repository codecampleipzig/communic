# Planning for PostgreSQL database for the class project
## Tables in the DB
* User table
* Project table
* Task table

#### Outstanding questions:
Where will the image files be stored? At present, the DB contains only URLs to their location. This means i) user thumbnails and ii) project images. Both would ideally be amended by us, after users have uploaded the images - e.g. make the file format, pixel dimensions (hence file size), etc, consistent.

## Fields in the DB
The sections below list the _field name_, the _type_ (of the stored values), and sometimes a brief _description_ of (or _query_ of mine) about information that the DB will need to store.

Note that this is only a **preliminary** list!

Certain fields are _optional_ - so the mock data for these must be able to accept an empty string.

I am assuming that the DB automatically creates the _primary key_ (ID) for each case (i.e. the number which identifies the specific user / project / task / user-project combination / user-task combination / project-task combination). So these fields are not listed below.

### User table

* username: string.
* email: string.
* password: string.
* userImageUrl: string. Is this optional?
* joinDate: Date.
* leaveDate: Date.

### Project table

* projectTitle: string.
* projectImageUrl: string. Assume only _one_ image can be uploaded?
* projectDescription: string. Alternative name would be ‘projectSummary’.
* projectGoal: string.
* projectTeam: User[]. All usernames that are linked to a specific project. Is an array of user IDs (keys); a _many-to-many_ relationship field, set on the project rather than the user (either would be possible). Cannot be empty, i.e. the initial project creator is by definition a team member. Note that the projectTeam does _not_ necessarily overlap fully with a given taskTeam.
* projectTasks: Task[].  Is an array of task IDs (keys); a _one-to-many_ relationship. Potentially an optional field - a user can initiate a project, without _yet_ having specified any tasks?

### Task table
* taskTitle: string.
* taskDescription: string. Optional field.
* taskStatus: boolean. Whether task is ‘current’ or ‘closed’.
* taskInitBy: string. Username that created the task.
* taskInitDate: Date. Date-time task first created.
* taskClosedBy: string. Username that closed (unchecked) the task.
* taskClosedDate: Date. Date-time task is closed (unchecked).
* taskDeleteBy: string. Username that deleted the task.
* taskDeleteDate: Date. Date-time task deleted.
* taskTeam: User[]. All usernames that are linked to a specific task. Is an array of user IDs (keys); a _many-to-many_ relationship field, set on the task rather than the user (either would be possible). Optional field - i.e. can be an empty [].

#### Outstanding questions:
There are _many-to-many_ relationships between Users and Projects, and between Users and Tasks. I don’t know whether Angular/PostgreSQL automatically creates ‘intermediary’ or ‘through’ tables, which store these relationships (i.e. each specific User-Project and User-Task combination) - or whether I have to specify them.

### Features to be added later
* projectTags: string[]. Used for filtering and presenting subsets of projects to users. Currently: will be implemented by a keyword search of all text in the project title + description + goal. In future: we could produce a menu of possible tags, _from which_ users can select e.g. 3-5 to describe their project.
* Full history of the team: which user(s) join, leave, and when. Note that a task can persist in DB, even if no users are attached.
* Full history of task status: which user(s) checked box, unchecked box, date-time in each case.
* Account for dependencies between tasks (e.g. some tasks require others to be completed): predecessor, successor, etc.


## apiResponses should return only the following (subsets of) DB information
Also see the Typescript file provided by Ani, which defines the following **interfaces**: User, Project, Task.

**getUser**:
* username
* email
* userImageUrl (is optional?)

**getProject** (specific):
* projectTitle
* projectImageUrl
* projectDescription
* projectGoal
* projectTeam
	* username
	* email
	* userImageUrl (is optional?)
* projectTasks: (is optional)
	* taskTitle
	* taskDescription (is optional)
	* taskStatus
	* taskTeam: (is optional)
		* username
		* email
		* userImageUrl (is optional?)

**getProjects**:
* Project[]

Eventually, the user will be able to _filter_ by all projects, or by user.



