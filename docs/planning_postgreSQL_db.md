# Planning for PostgreSQL database for the class project
## Tables in the DB
* User table
* Project table
* Task table

#### Intermediate tables
The DB (or Express ORM?) will probably automatically create tables that specify the many-to-many relationships between certain variables. Currently these include:
* User-Project Relationship table
* User-Task Relationship table

However, if we wish to add extra variables that are specific to _relationships_ (i.e. each user-project or user-task combination) then we probably need to specify the intermediate tables by hand.

#### Outstanding questions:
Where will the image files be stored? At present, the DB contains only URLs to their location. This means i) user thumbnails and ii) project images. Both would ideally be amended by us, after users have uploaded the images - e.g. make the file format, pixel dimensions (hence file size), etc, consistent.

## Fields in the DB
The sections below list the _variable name_ (field or column in DB), the _type_ (of the stored values), and sometimes a brief _description_ of (or question of mine) about information that the DB will need to store.

Note that this is a **work in progress**!

The DB should automatically create a _primary key_ (ID) for each case (i.e. row in the table). These are probably not numbers - but in the mock data we just use numbers.

Certain fields are _optional_ for the platform's users - so the mock data for these must be able to accept e.g. empty strings.


### User table

* userId: _auto-generated_
* userName: string
* userEmail: string
* password: string
* userImageUrl: string. _Optional_
* joinDate: Date
* leaveDate: Date

### Project table

* projectId: _auto-generated_
* projectTitle: string
* projectImageUrl: string. Assume only _one_ image can be uploaded?
* projectDescription: string. Alternative name would be ‘projectSummary’
* projectGoal: string
* projectStatus: string. Values to include: open, done, deleted.
* projectCreator: User. A _one-to-one_ relationship, set on projectCreator.
* projectTeam: User[]. All usernames that are linked to a specific project. A _many-to-many_ relationship, set on the project rather than the user (either would be possible). Cannot be empty, i.e. the initial projectCreator is by definition a team member.
* projectTasks: Task[]. A _one-to-many_ relationship, set on the Task. Potentially an optional field - e.g. a user can initiate a project, without _yet_ having specified any tasks?

### Task table
* taskId: _auto-generated_
* projectID: _auto-generated_. This is only needed in the mock data - because in the DB the information is already specified by the _one-to-many_ relationship between Project and Task?
* taskTitle: string.
* taskDescription: string. Optional field.
* taskStatus: string. Values to include: 'open', 'done', 'deleted'.
* taskCreator: User. A _one-to-one_ relationship, set on taskCreator.
* taskInitDate: Date. Date-time task first created.
* taskClosedBy: User. Username that closed (unchecked) the task.
* taskClosedDate: Date. Date-time task is closed (unchecked).
* taskDeleteBy: User. Username that deleted the task.
* taskDeleteDate: Date. Date-time task deleted.
* taskTeam: User[]. All usernames that are linked to a specific task. Is an array of user IDs (keys); a _many-to-many_ relationship field, set on the task rather than the user (either would be possible). Optional field - i.e. can be an empty [].
* menuSection: string. Values include: 'starter', 'main', 'dessert'.

#### Outstanding questions:
I presume we define the DB via Express's Object-relational mapper (ORM), rather than writing SQL statements?

To be researched re PostgreSQL / Express ORM:
* What _type_ do primary keys (IDs) have?
* Are there _naming conventions_ for variables, in Postgres (I suspect they shouldn't be camel case!)?


### Features to be added later
* projectTags: string[]. Used for filtering and presenting subsets of projects to users. Currently: will be implemented by a keyword search of all text in the project title + description + goal. In future: we could produce a menu of possible tags, _from which_ users can select e.g. 3-5 to describe their project.
* Full history of the team: which user(s) join, leave, and when. Note that a task can persist in DB, even if no users are attached.
* Full history of task status: which user(s) checked box, unchecked box, date-time in each case.
* Account for dependencies between tasks (e.g. some tasks require others to be completed): predecessor, successor, etc.


## apiResponses should return only subsets of DB information
E.g. if one asks for information about a user, we should get their userName, userEmail, etc back - but _not_ their password!

So the DB stores quite a lot of information, which is not necessarily used (yet) in our apiResponses...

See the Typescript file under communic/src/app/datatypes, which defines the  **interfaces** for: User, Project, Task.
