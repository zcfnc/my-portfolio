export interface BlogPost {
  id: number
  title: string
  date: string
  tags: string[]
  summary: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Git Version Control Common Commands',
    date: '2020-03-15',
    tags: ['Git', 'DevOps'],
    summary: 'A comprehensive quick reference for Git commands including config, clone, branch, merge, reset, and more.',
    content: `## 1. How to Push Local Code to GitHub

1. Manually create a repository on GitHub
2. Initialize local repository:
\`\`\`
git init
git remote add origin XXX.git
\`\`\`
3. Add code to the repository:
\`\`\`
git add .
\`\`\`
4. Commit and push:
\`\`\`
git commit -m "commit message"
git push -u origin master
\`\`\`

## 2. Common Commands

- \`git reset\`: Branch rollback, only affects local, does not affect remote branch
- \`git revert\`: Branch rollback, affects remote branch
- \`git cherry-pick c1\`: Copy a branch to another branch location
- \`git merge c1\`: Merge default branch into c1
- \`git rebase\`: Branch move
- \`git branch newName\`: Create new branch

## 3. git config

Configure Git parameters:
- View config: \`git config <--local | --global | --system> -l\`
- Edit config file: \`git config <--local | --global | --system> -e\`
- Configure user info: \`git config --global user.name <username>\`
- Change buffer size: \`git config --global http.postBuffer <size>\`
- Cache password: \`git config --global credential.helper cache\`
- Store password permanently: \`git config --global credential.helper store\`

## 4. git clone

- Default clone: \`git clone <URL>\`
- Specify local directory: \`git clone <URL> <local-dir>\`
- Clone specific branch: \`git clone <URL> -b <branch> <local-dir>\`

## 5. git status

- Full status: \`git status\`
- Short mode: \`git status -s\` (A=new, M=modified, D=deleted, ??=untracked)

## 6. git remote

- List remotes: \`git remote -v\`
- Add remote: \`git remote add <alias> <URL>\`
- Remove remote: \`git remote remove <alias>\`
- Change URL: \`git remote set-url <alias> <new-URL>\`

## 7. git branch

- List branches: \`git branch\`
- Create branch: \`git branch <name>\`
- Delete branch: \`git branch -d <name>\`
- Rename branch: \`git branch -m [<old>] <new>\`

## 8. git checkout

- Switch branch: \`git checkout <name>\`
- Create and switch: \`git checkout -b <name>\`
- Discard local changes: \`git checkout <filepath>\`

## 9. git add / commit / push

- Add all: \`git add -A\`
- Commit with message: \`git commit -m "<message>"\`
- Push branch: \`git push <remote> <local-branch>:<remote-branch>\`
- Delete remote branch: \`git push <remote> --delete <branch>\`

## 10. git diff / log / reset / revert

- Unstaged changes: \`git diff\`
- Between branches: \`git diff <branch1> <branch2>\`
- View logs: \`git log\`
- Soft reset: \`git reset --soft <commit ID>\`
- Hard reset: \`git reset --hard <commit ID>\`
- Revert commit: \`git revert <commit ID>\`

## 11. git tag

- List tags: \`git tag\`
- Add annotated tag: \`git tag -a <name> -m <message>\`
- Push tag: \`git push <remote> <tag>\`
- Push all tags: \`git push <remote> --tags\``
  },
  {
    id: 2,
    title: 'Linux Common Commands Quick Reference',
    date: '2020-02-10',
    tags: ['Linux', 'DevOps'],
    summary: 'Essential Linux commands for background processes, process management, screen sessions, and grep.',
    content: `## 1. Basic Commands

### Run program in background
\`\`\`bash
nohup python3 scala.py &                           # Logs default to nohup.out
nohup python3 scala.py > log.file 2>&1 &            # Logs to log.file
nohup python3 scala.py > /dev/null 2>&1 &           # No log file
\`\`\`

### Process query
\`\`\`bash
ps ux                        # View all processes
ps -a                        # Task manager
ps ux | grep 'python3'      # Filter processes
\`\`\`

### Pass command output as arguments
\`\`\`bash
spark-submit ... $(date +%F) $(date +%F)
# or use backticks:
spark-submit ... \\\`date +%F\\\` \\\`date +%F\\\`
\`\`\`

## 2. Process Management

### pgrep
"Process-ID Global Regular Expressions Print". Lists PIDs matching criteria.
\`\`\`bash
pgrep nginx    # Returns nginx process IDs
\`\`\`

### systemd
Linux init system by Lennart Poettering. Replaces System V and BSD-style init. Uses Socket/Bus activation and Cgroups instead of PID to track processes.

### nohup + &
- \`&\` runs in background (survives Ctrl+C but not terminal close)
- \`nohup\` ignores SIGHUP signal (survives terminal close but not Ctrl+C)
- Combined, the process survives both

### screen
GNU Screen - a terminal multiplexer. Use \`screen -r\` to restore sessions after network disconnection.

### grep
"Global Regular Expressions Print". Scans files line by line.
\`\`\`
-c  Count matches
-i  Case insensitive
-n  Print line numbers
-v  Invert match
-l  Print filenames only
\`\`\``
  },
  {
    id: 3,
    title: 'Vim Tutor - Complete Keybinding Reference',
    date: '2020-01-20',
    tags: ['Vim', 'DevOps'],
    summary: 'A complete Vim keybinding cheat sheet covering navigation, editing, search, and file operations.',
    content: `## Learning Resources
- Official tutor tutorial
- Interactive Vim tutorial (openvim.com)
- VIM Adventures - Learn VIM while playing a game

## Basic Navigation
\`\`\`
h - left    l - right    k - up    j - down
w - next word    e - end of word    0 - line start    $ - line end
gg - first line    G - last line
\`\`\`

## Editing
\`\`\`
i - insert mode    a - append    o - new line below    O - new line above
u - undo    U - undo line    Ctrl+R - redo
p - paste    r - replace char    R - replace mode
yw - copy word    v+y - copy selection
\`\`\`

## Delete (d + motion)
\`\`\`
x - delete char    dw - delete to word    de - delete to end
d$ - delete to line end    dd - delete line
d2w - delete 2 words    2dd - delete 2 lines
\`\`\`

## Change (c + motion)
\`\`\`
cw/ce - change word    c$ - change to line end    c2w - change 2 words
dd + p - cut line and paste below
\`\`\`

## Search & Replace
\`\`\`
/word - search forward (n: next, N: previous)
?word - search backward
% - find matching bracket
:s/old/new - replace in current line
:%s/old/new/g - replace all
:%s/old/new/gc - replace all with confirmation
:1,3s/old/new/g - replace in lines 1-3
\`\`\`

## File Operations
\`\`\`
:w - save    :w filename - save as    :q - quit    :wq - save and quit
:!command - run external command (e.g., :!ls)
:r filename - insert file content at cursor
Ctrl+g - show file status
set number - show line numbers
\`\`\``
  },
  {
    id: 4,
    title: 'HBase Fundamentals: Storage Architecture and Data Model',
    date: '2020-06-12',
    tags: ['HBase', 'Big Data'],
    summary: 'Understanding HBase storage format, data model, region servers, read process, and partitioned tables.',
    content: `## 1. HBase Storage Format

HBase uses KeyValue storage internally. Key = rowKey:family:column:logTime, Value = stored content.

Within a region, data is sorted in ascending order, except logTime (descending). Information closer to the left of the rowKey is easier to retrieve. Design rowKeys with important information on the left.

### Logical Structure

| RowKey | Timestamp | info:name | info:age | area:country | area:city |
|--------|-----------|-----------|----------|-------------|-----------|
| Row1   | t1        | Zhang San | 11       | China       | Shanghai  |
| Row2   | t2        | Wang Er   | 20       |             |           |

### Key Concepts

- **Row Key**: Table primary key, sorted lexicographically
- **Column Family**: Horizontally partitions the table
- **Column (Qualifier)**: Belongs to a column family, dynamically added
- **Cell**: The specific value
- **Version**: Represented by TimeStamp

The KEY = Row key + Column Family + Column + TimeStamp. Same key can have multiple versions.

## 2. Region Server Architecture

- One Region Server = one machine node
- One Region Server contains multiple Regions
- One Region contains multiple Column Families
- One Table can span multiple Regions

## 3. Data Read Process

Client -> ZooKeeper -> Region Server -> Region -> MemStore (if not found) -> StoreFile

Client caches rowkey->HRegion mapping to reduce lookup overhead.

## 4. Storage Mechanism

HBase is column-family oriented:
- Table = collection of rows
- Row = collection of column families
- Column family = collection of columns
- Column = collection of key-value pairs

Column families must be specified at table creation time.

## 5. Partitioned Tables

**Why**: Transform unordered large table growth into ordered growth.

By default, each table has one Region. As data grows, Region splits in an unordered way, making scans slow. Pre-creating partitioned tables keeps data ordered and improves query performance.`
  },
  {
    id: 5,
    title: 'Redis Core Concepts: Caching, Data Types, and Common Issues',
    date: '2020-07-18',
    tags: ['Redis', 'Database'],
    summary: 'Comprehensive overview of Redis fundamentals including data types, expiration strategies, cache consistency, and common pitfalls.',
    content: `## 1. Why Use Redis?

- **Performance**: Cache slow, infrequently changing SQL queries for fast response
- **Concurrency**: Buffer between requests and database to prevent connection overload

## 2. Why is Single-threaded Redis So Fast?

- Pure in-memory operations
- Single-threaded avoids context switching overhead
- Non-blocking I/O multiplexing

## 3. Data Types and Use Cases

| Type | Use Case |
|------|----------|
| **String** | Complex counting, caching |
| **Hash** | Structured objects, single sign-on (user info with cookieId as key) |
| **List** | Message queues, pagination via lrange |
| **Set** | Global deduplication, intersection/union/difference operations |
| **Sorted Set** | Leaderboards, TOP N operations |

## 4. Expiration and Memory Eviction

Redis uses periodic deletion + lazy deletion:
- Periodic: checks random keys every ~100ms
- Lazy: checks on access

Memory eviction policies:
1. **noeviction**: Error on new writes (not recommended)
2. **allkeys-lru**: Remove least recently used (recommended)
3. **volatile-lru**: LRU among keys with expiry
4. **volatile-ttl**: Remove keys with earliest expiry

## 5. Cache-Database Consistency

Strong consistency data should not be cached. Strategy: update database first, then delete cache. Use message queues as compensation for failed cache deletions.

## 6. Cache Penetration and Avalanche

**Penetration** (requesting non-existent data):
- Mutex locks, async update, Bloom filters

**Avalanche** (mass cache expiry at same time):
- Add random values to expiry times
- Mutex locks
- Dual cache (Cache A with TTL + Cache B without TTL)

## 7. Concurrent Key Competition

For unordered operations: use distributed locks. For ordered operations: use timestamps or queues for serial access.

## 8. Redis Characteristics

- Handles 100K+ read/write operations per second
- Max single value 1GB (vs memcached 1MB)
- Supports key expiry
- Rich data types: string, list, set, sorted set, hash
- Atomic transactions`
  },
  {
    id: 6,
    title: 'Neo4j Cluster Installation and Configuration',
    date: '2020-08-25',
    tags: ['Neo4j', 'Graph DB', 'Database'],
    summary: 'Step-by-step guide for setting up a Neo4j Enterprise cluster with HA mode, troubleshooting, and utility scripts.',
    content: `## 1. Prerequisites

- neo4j-enterprise-3.4.18-unix.tar.gz
- Third-party JARs: apoc, graph-algorithms, hive connectors, httpclient, etc.

Test hosts: xxx.xx.xxx.100 (master), xxx.xx.xxx.102 (slave01), xxx.xx.xxx.9 (slave02)

## 2. Installation Steps

1. Extract: \`tar -vxf neo4j-enterprise-3.4.18-unix.tar.gz\`

2. Configure neo4j.conf:
\`\`\`
dbms.connectors.default_listen_address=0.0.0.0
ha.server_id=1
ha.initial_hosts=xxx.xx.xxx.100:5001,xxx.xx.xxx.102:5001,xxx.xx.xxx.9:5001
dbms.mode=HA
dbms.memory.heap.initial_size=10g
dbms.memory.heap.max_size=10g
dbms.memory.pagecache.size=10g
\`\`\`

3. Copy JARs to plugins directory

4. SCP to slave nodes:
\`\`\`bash
scp -r ./opt/neo4j-enterprise-3.4.18/ root@xxx.xx.xxx.102:/opt/
scp -r ./opt/neo4j-enterprise-3.4.18/ root@xxx.xx.xxx.9:/opt/
\`\`\`

5. Change ha.server_id to 2 and 3 on slave nodes

6. Start all nodes: \`./neo4j start\`

7. Verify at http://xxx.xx.xxx.100:7474/browser/

## 3. Troubleshooting

**Nodes cannot discover each other**: Add to each node's neo4j.conf:
\`\`\`
dbms.connectors.default_listen_address=<node-IP>
dbms.connector.bolt.enabled=true
dbms.connector.bolt.listen_address=:7687
\`\`\`

**Shell Connection refused**: Uncomment \`dbms.shell.enabled=true\`, restart.

## 4. Utility Scripts

**Clear database** (delete edges first, then vertices):
\`\`\`bash
cypher-shell "call apoc.periodic.iterate('match ()-[r]-() return r','delete r',{batchsize:'100000'})"
cypher-shell "call apoc.periodic.iterate('match (n) return n','delete n',{batchsize:'100000'})"
\`\`\`

**Auto-restart script**: Monitors port 7474 every 10 minutes, restarts neo4j if down. Run with \`nohup selfStartUp.sh &\` on all nodes.`
  },
  {
    id: 7,
    title: 'Nebula Graph Installation and Cluster Deployment',
    date: '2020-09-10',
    tags: ['Nebula Graph', 'Graph DB', 'Database'],
    summary: 'Guide for installing Nebula Graph, deploying clusters with SSH setup, and configuring the web-based visualization tool.',
    content: `## 1. Installation

### Download and Install
\`\`\`bash
wget https://nebula-graph.oss-cn-hangzhou.aliyuncs.com/package/1.0.0-rc2/nebula-1.0.0-rc2.el7-5.x86_64.rpm
sudo rpm -ivh nebula-2019.12.23-nightly.el6-5.x86_64.rpm
\`\`\`

### Service Management
\`\`\`bash
sudo /usr/local/nebula/scripts/nebula.service start all    # Start
sudo /usr/local/nebula/scripts/nebula.service status all   # Status
sudo /usr/local/nebula/bin/nebula -u user -p password      # Connect
sudo /usr/local/nebula/scripts/nebula.service stop all     # Stop
\`\`\`

## 2. Cluster Deployment

1. Modify IP in \`nebula/etc/nebula-metad.conf\`
2. Update \`/etc/hosts\` with host IPs
3. Update hostname in \`nebula-graphd.conf\`:
\`\`\`
--meta_server_addrs=ng1:45500
--local_ip=ng1
--ws_ip=ng1
\`\`\`
4. Add node addresses in config files (comma-separated)
5. Edit host files: graph.hosts, meta.hosts, storage.hosts

6. Set up SSH passwordless login:
\`\`\`bash
ssh-keygen -t rsa
cat ./id_rsa.pub >> ./authorized_keys
scp ~/.ssh/id_rsa.pub user@ng2:/home/hadoop/
# On slave: cat ~/id_rsa.pub >> ~/.ssh/authorized_keys
\`\`\`

## 3. Visualization (Nebula Graph Studio)

\`\`\`bash
git clone https://github.com/vesoft-inc/nebula-web-docker
cd nebula-web-docker
systemctl start docker
docker-compose pull && docker-compose up
\`\`\`
Access at http://0.0.0.0:7001

## 4. Known Issues

**"failed to set SO_REUSEPORT"**: Linux kernel < 3.9 (CentOS 6.5). Solution: Upgrade to CentOS 7.5 (kernel 3.10+).`
  },
  {
    id: 8,
    title: 'Machine Learning Fundamentals: From Linear Regression to Recommender Systems',
    date: '2020-05-20',
    tags: ['Machine Learning', 'Python'],
    summary: 'Comprehensive ML notes covering linear regression, logistic regression, neural networks, SVM, K-Means, PCA, and recommender systems.',
    content: `## 1. Linear Regression

### Feature Scaling
- **Standardization (Z-score)**: z = (Xi - mean) / std, distributed in [-1, 1]
- **Min-Max Scaling**: z = (xi - min) / (max - min), distributed in [0, 1]

Most ML algorithms use Standardization. Min-Max is used in image processing and neural networks.

### Normal Equation
Direct solution without tuning learning rate: theta = (X^T X)^(-1) X^T y

### Underfitting and Overfitting
Use regularization to solve overfitting by penalizing parameters.

## 2. Logistic Regression

### Sigmoid Function
htheta(x) = 1 / (1 + e^(-theta^T x))

Key insight from Andrew Ng: "The decision boundary is a property of the prediction function, not of the training set."

### Regularization
Two strategies: reduce features (loses info) or penalize parameters (regularization).

### Multi-class: One-vs-All
Convert K-class into K binary classifiers. For input x, the class with highest h(x) wins.

## 3. Neural Networks

- Convolutional layer: extracts features
- Pooling layer: dimensionality reduction
- Fully connected layer: matrix-vector multiplication

## 4. SVM

### Large Margin Classifier
Finds hyperplane maximizing distance to all points.

### Kernel Functions
Gaussian Kernel measures similarity between samples and landmarks.

### Model Selection
- n >> m: logistic regression or linear SVM
- n small, m moderate: Gaussian kernel SVM
- n small, m large: create features, then logistic regression

## 5. K-Means
- k = number of clusters
- Use elbow method to determine k
- Bisecting K-Means: starts with one cluster, splits iteratively

## 6. PCA
Extracts principal components from redundant features, improving training speed.

## 7. Anomaly Detection
Gaussian distribution model to distinguish normal from anomalous samples.

## 8. Recommender Systems
- **User-based**: find similar users, recommend their preferences
- **Item-based**: find similar items based on ratings
- **Model-based**: train prediction model from user data`
  },
  {
    id: 9,
    title: 'Random Forest vs GBDT: Comparison and Parameter Tuning',
    date: '2020-05-28',
    tags: ['Machine Learning', 'Python'],
    summary: 'Comparison of Random Forest (Bagging) and Gradient Boosted Decision Trees (Boosting) with parameter tuning guide.',
    content: `## 1. Random Forest (Bagging)

- Builds multiple decision trees for classification
- Randomly selects samples and features
- Ensemble learning: voting (democratic centralism)

## 2. GBDT (Boosting)

- Uses regression trees, not classification trees
- Core idea: accumulate results of all trees as final result
- Uses negative gradient of loss function to approximate residuals

### Why GBDT Instead of Regression?
When features have no linear relationship with the target, gradient decision trees convert features into numerical classification for optimal regression results.

### Key Parameters
\`\`\`python
GradientBoostingRegressor(
    loss='ls',           # Loss function (ls, lad, huber, quantile)
    learning_rate=0.1,   # Learning rate
    n_estimators=100,    # Number of trees (higher = better with good hardware)
    max_depth=3,         # Tree depth (tune first, affects overfitting)
    subsample=1.0,
    min_samples_split=2,
    min_samples_leaf=1,
    max_features=None
)
\`\`\`

### Parameter Tuning with Grid Search
Example hyperparameters:
\`\`\`python
n_estimators=2000
learning_rate=0.01
max_depth=15
max_features='sqrt'
min_samples_leaf=10
min_samples_split=10
loss='ls'
random_state=42
\`\`\`

## 3. Handling Large Prediction Errors

When missing values are set to mean or 0, prediction errors can be large. With significantly fluctuating data, historical mean may be unreliable. Try using the mean of the most recent year instead.`
  },
  {
    id: 10,
    title: 'Learning Big Data from Scratch - Key Insights',
    date: '2020-04-15',
    tags: ['Big Data', 'Hadoop', 'Spark'],
    summary: 'Key insights from "Learning Big Data from Scratch" covering HDFS, MapReduce, Spark efficiency, and learning methods.',
    content: `## 1. MapReduce: Programming Model and Computing Framework

Models are abstractions that help us understand essence. The best people share strong insight - seeing through complexity to the core of problems.

Training this ability: when encountering problems, pause and think about underlying patterns.

## 2. HDFS Architecture

- **DataNode**: stores and reads/writes file data blocks
- **NameNode**: manages metadata (file paths, block IDs, locations) - like a File Allocation Table

### High Availability
1. Data fault tolerance: checksums on blocks; re-read from backup if failed
2. Disk fault tolerance: report failed blocks, replicate to other servers
3. DataNode fault tolerance: heartbeat monitoring; timeout triggers replication
4. NameNode fault tolerance: critical single point of failure

## 3. Why Spark is More Efficient

Unlike MapReduce (one map + one reduce per application), Spark splits applications into multiple stages forming a DAG, enabling more flexible scheduling.

## 4. How to Develop a Big Data SQL Engine

Understanding principles allows you to deduce implementation. True experts derive conclusions from first principles.

## 5. Akka: Actor Programming Model

Actors communicate via asynchronous messages through Mailboxes. Unlike synchronous method calls, message sending is non-blocking, enabling concurrent execution.

## 6. Learning Methods

Read original papers first for core design principles, then official documentation, then source code.

## 7. AARRR User Growth Model

- **Acquisition**: attract users through promotion
- **Activation**: engage with good content
- **Retention**: retain old users (cheaper than acquiring new ones)
- **Revenue**: monetize through payments and ads
- **Referral**: leverage social networks for viral spread`
  },
  {
    id: 11,
    title: 'Python Practical Features: Decorators, Threading, and More',
    date: '2020-03-05',
    tags: ['Python'],
    summary: 'Practical Python features including decorators, thread pools, file I/O, regex, multithreading vs multiprocessing, and collections module.',
    content: `## 1. Decorators

A decorator adds extra functionality to functions without code modification. Common uses: logging, performance testing, caching, permission verification.

Without decorators:
\`\`\`python
def fun_one():
    start = time()
    sleep(1)
    print("func one run time {}".format(time() - start))
\`\`\`

With decorators:
\`\`\`python
def run_time(func):
    def wrapper():
        start = time()
        func()
        print("run time {}".format(time() - start))
    return wrapper

@run_time
def fun_one():
    sleep(1)
\`\`\`

## 2. File I/O Modes

| Mode | Description |
|------|-------------|
| r | Read-only |
| r+ | Read-write (overwrite), file must exist |
| w | Write-only (creates/truncates) |
| w+ | Read-write (creates/truncates) |
| a | Append-write only |
| a+ | Append read-write |

## 3. Regular Expressions

- \`match()\` matches from string start; \`search()\` finds pattern anywhere
- \`group()\` returns full match; \`groups()\` returns all subgroups
- \`findall()\` returns all non-overlapping matches as a list
- \`sub()\`/\`subn()\` for replacement

## 4. Multithreading vs Multiprocessing

- **I/O-intensive tasks**: use multithreading
- **CPU-intensive tasks**: use multiprocessing
- Python's GIL limits multithreading for CPU-bound work

## 5. Collections Module

- \`namedtuple\`: named elements in tuples
- \`defaultdict\`: dict with default values for missing keys
- \`Counter\`: convenient counting (\`Counter('aabbcc')\` -> \`{'a':2, 'b':2, 'c':2}\`)
- \`deque\`: double-ended queue with O(1) append/pop on both ends

## 6. Offline Environment Migration

\`\`\`bash
pipreqs ./ --encoding=utf8          # Generate requirements.txt
pip wheel --wheel-dir=./packages -r requirements.txt  # Download
pip install --no-index --find-links=./packages -r requirements.txt  # Install
\`\`\``
  },
  {
    id: 12,
    title: 'Python Underscores Explained: Single, Double, and Dunder',
    date: '2020-02-25',
    tags: ['Python'],
    summary: 'Understanding the five underscore patterns in Python: _var, var_, __var, __var__, and _ with practical examples.',
    content: `## Five Underscore Patterns

### 1. Leading Single Underscore: _var
Indicates internal use. Can be accessed externally, but NOT imported with wildcard imports.

\`\`\`python
class Test:
    def __init__(self):
        self.foo = 11
        self._bar = 23

>>> t = Test()
>>> t._bar     # Accessible
23

# In my_module.py:
def _internal_func():
    return 42

>>> from my_module import *
>>> _internal_func()    # NameError!

>>> import my_module
>>> my_module._internal_func()  # Works
42
\`\`\`

### 2. Trailing Single Underscore: var_
Avoids naming conflicts with Python keywords.
\`\`\`python
def make_object(name, class_):   # 'class' is reserved
    pass
\`\`\`

### 3. Leading Double Underscore: __var
Triggers name mangling: \`__mangled\` becomes \`_ClassName__mangled\`.
\`\`\`python
_MangledGlobal__mangled = 23

class MangledGlobal:
    def test(self):
        return __mangled

>>> MangledGlobal().test()
23
\`\`\`

### 4. Dunder Methods: __var__
Special methods defined by Python. Avoid this pattern for custom attributes.

### 5. Single Underscore: _
Throwaway variable for temporary values.
\`\`\`python
for _ in range(32):
    print('Hello, World.')
\`\`\`

## Summary

| Pattern | Meaning |
|---------|---------|
| \`_var\` | Internal use convention (hint to programmers) |
| \`var_\` | Avoid keyword conflicts |
| \`__var\` | Name mangling in classes |
| \`__var__\` | Python special methods |
| \`_\` | Throwaway variable |`
  },
  {
    id: 13,
    title: 'Porting Python Apps to RedHat: Oracle, NumPy, and PyInstaller Issues',
    date: '2021-03-15',
    tags: ['Python', 'DevOps'],
    summary: 'Troubleshooting guide for deploying packaged Python programs to RedHat production with Oracle DB, NumPy, and PyInstaller.',
    content: `## 1. Oracle Database Access Without instantclient

### DPI-1047: 64-bit Oracle Client library cannot be loaded
\`\`\`bash
rpm -ivh oracle-instantclient11.2-basic-11.2.0.3.0-1.x86_64.rpm
export ORACLE_HOME=/usr/lib/oracle/11.2/client64/lib
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$ORACLE_HOME
ln -s libclntsh.so.11.1 libclntsh.so
easy_install cx_Oracle
\`\`\`

### ORA-01804 Error
Comment out \`os.environ["LD_LIBRARY_PATH"]\` line. Fix ORA-21561 by updating /etc/hosts with correct hostname.

### NumPy/Pandas Version Conflict on Python 3.5.2
Use compatible versions: numpy 1.11.1, pandas 0.18.1.

### PyInstaller Missing sklearn Imports
Add hidden imports in main.spec:
\`\`\`python
hiddenimports=['cython', 'sklearn', 'sklearn.utils._cython_blas',
    'sklearn.neighbors.typedefs', 'sklearn.neighbors.quad_tree',
    'sklearn.tree', 'sklearn.tree._utils']
\`\`\`

### Missing Oracle Libraries After Packaging
Add binaries in main.spec:
\`\`\`python
a.binaries += [
    ('libclntsh.so', '.../libclntsh.so.11.1', 'BINARY'),
    ('libnnz11.so', '.../libnnz11.so', 'BINARY'),
    ('libocci.so', '.../libocci.so.11.1', 'BINARY'),
    ('libociicus.so', '.../libociicus.so', 'BINARY'),
]
\`\`\`

### ORA-12737: Unsupported Character Set
Change encoding from \`'SIMPLIFIED CHINESE_CHINA.UTF8'\` to \`'AMERICAN_AMERICA.AL32UTF8'\`.

## 2. Final Packaging Steps

1. Download Oracle client drivers (basic + SDK)
2. Configure main.spec with all dependencies and binary paths
3. Package: \`pyinstaller main.spec\``
  },
  {
    id: 14,
    title: 'PySpark Reading HBase Data for Model Training',
    date: '2020-10-08',
    tags: ['PySpark', 'HBase', 'Big Data'],
    summary: 'How to read data from HBase using PySpark for transformer load prediction, including required packages and common issues.',
    content: `## 0. Requirements

Predict transformer load using PySpark. Pipeline: read from HBase -> preprocessing -> train models.

## 1. Required Packages

Copy from HBase's lib to Spark's jar directory:
- All hbase-*.jar files
- guava-12.0.1.jar
- htrace-core-3.1.0-incubating.jar
- protobuf-java-2.5.0.jar
- spark-example-1.6.0.jar
- metrics-core-2.2.0.jar

## 2. Reading Data

\`\`\`python
host = '172.16.221.102'
table = 'PSSC:HT_E_MP_CURVE_RELA'
conf = {
    "hbase.zookeeper.quorum": host,
    "hbase.mapreduce.inputtable": table
}
keyConv = "org.apache.spark.examples.pythonconverters.ImmutableBytesWritableToStringConverter"
valueConv = "org.apache.spark.examples.pythonconverters.HBaseResultToStringConverter"

hbase_rdd = sc.newAPIHadoopRDD(
    "org.apache.hadoop.hbase.mapreduce.TableInputFormat",
    "org.apache.hadoop.hbase.io.ImmutableBytesWritable",
    "org.apache.hadoop.hbase.client.Result",
    keyConverter=keyConv, valueConverter=valueConv, conf=conf
)
output = hbase_rdd.collect()
for (k, v) in output:
    print(k, v)
\`\`\`

## 3. Common Issues

### Missing metrics-core JAR
Error: \`NoClassDefFoundError: com/yammer/metrics/core/Gauge\`

Most search results suggest hosts mapping issues. The actual root cause was the missing metrics-core-2.2.0.jar. **Lesson**: Read the entire error trace carefully, not just the first part.

### Python Version Conflict
\`\`\`
Exception: Python in worker has different version 3.5 than that in driver 3.6
\`\`\`
Fix in spark-env.sh:
\`\`\`bash
export PYSPARK_PYTHON=D:\\Anaconda3\\envs\\python36
export PYSPARK_DRIVER_PYTHON=D:\\Anaconda3\\envs\\python36
\`\`\``
  },
  {
    id: 15,
    title: 'PyQt5 Getting Started: Building GUI Tools in Python',
    date: '2020-04-10',
    tags: ['Python', 'PyQt5'],
    summary: 'Quick start guide for PyQt5 with installation tips, Qt Designer setup in PyCharm, and a practical business trip calculator example.',
    content: `## 1. Installation

### Converting .ui to .py
If you get: "Fatal error in launcher: Unable to create process"

Configure PyUIC in PyCharm's External Tools:
\`\`\`
Program: D:\\Anaconda3\\envs\\python36\\python.exe
Arguments: -m PyQt5.uic.pyuic $FileName$ -o $FileNameWithoutExtension$.py
Working directory: $FileDir$
\`\`\`

## 2. Example: Business Trip Allowance Calculator

A simple GUI tool that calculates business trip allowances based on dates and workday/weekend rates.

The application:
- Input fields: start date, end date, workday rate, weekend rate
- Date format: YYYYMMDD (e.g., 20200101)
- Calculates workdays and weekends in the date range
- Computes total allowance

PyQt5 turned out to be fairly straightforward for simple GUI applications. The key steps:
1. Design the UI in Qt Designer
2. Convert .ui file to .py
3. Add business logic
4. Handle errors with user-friendly messages`
  },
  {
    id: 16,
    title: 'Solving Slow HTTP DoS Vulnerabilities in Flask',
    date: '2021-01-20',
    tags: ['Python', 'Flask', 'Security'],
    summary: 'Understanding and mitigating slow HTTP denial-of-service attacks (Slowloris, Slow POST, Slow Read) in Flask applications.',
    content: `## 1. What is a Slow HTTP DoS Attack?

An application-layer DoS attack targeting web servers. Three main types:

- **Slowloris**: Sends incomplete HTTP headers (only \\r\\n instead of \\r\\n\\r\\n), server keeps waiting until timeout
- **Slow POST**: Declares large Content-Length, sends body very slowly
- **Slow Read**: Requests large file but sets tiny TCP window, keeping server memory occupied

## 2. Flask Countermeasures

- Limit request data size
- Limit maximum time for HTTP request headers
- Limit requests per IP

## 3. Testing with slowhttptest

### Installation
\`\`\`bash
yum install openssl openssl-devel gcc-c++
tar -xzvf slowhttptest-x.x.tar.gz
cd slowhttptest-x.x
./configure --prefix=PREFIX
make && sudo make install
\`\`\`

### Test Examples

Slowloris mode:
\`\`\`bash
slowhttptest -c 1000 -H -g -o my_header_stats -i 10 -r 200 -t GET -u https://target -x 24 -p 3
\`\`\`

Slow POST mode:
\`\`\`bash
slowhttptest -c 3000 -B -g -o my_body_stats -i 110 -r 200 -s 8192 -t FAKEVERB -u http://target -x 10 -p 3
\`\`\`

Slow Read mode:
\`\`\`bash
slowhttptest -c 8000 -X -r 200 -w 512 -y 1024 -n 5 -z 32 -k 3 -u https://target -p 3
\`\`\`

## 4. What to Monitor

- Whether Connected sessions get released
- Whether non-compliant requests are closed by the server
- Whether the service remains operational during the attack`
  },
  {
    id: 17,
    title: 'Spark Core Architecture and RDD Programming',
    date: '2020-06-30',
    tags: ['Spark', 'Big Data'],
    summary: 'Spark fundamentals covering Driver/Executor architecture, RDD creation, transformation vs action operators, and SparkSQL basics.',
    content: `## 1. Core Components

- **Driver**: Converts user programs into jobs, schedules tasks, provides monitoring UI
- **Executor**: Executes tasks, provides in-memory storage for cached RDDs
- **Master**: Resource scheduling and cluster monitoring
- **Worker**: Receives tasks from Master

## 2. RDD (Resilient Distributed Dataset)

### Creation
\`\`\`scala
// From memory
val rdd = sc.makeRDD(Seq(1, 2, 3, 4))
// From files
val rdd = sc.textFile("datas/1.txt")
\`\`\`

### Operators
- **Transformation** (lazy): flatMap, map, filter, groupBy
- **Action** (triggers execution): collect, count, foreach

### Key Transformation Operators

| Operator | Description |
|----------|-------------|
| map | Applies function to each element |
| mapPartitions | Operates on entire partitions (faster, more memory) |
| groupBy | Shuffles and regroups data |
| coalesce | Reduces partitions (no shuffle by default) |
| repartition | Increases partitions (with shuffle) |

### groupByKey vs reduceByKey
- groupByKey: only groups, requires separate aggregation
- reduceByKey: groups AND aggregates with pre-aggregation before shuffle - much better performance

### foreach vs collect().foreach
- foreach: executes on each Executor (distributed)
- collect().foreach: gathers all data to Driver first

## 3. Wide vs Narrow Dependencies

- **Narrow**: parent partition -> one child partition (one-to-one)
- **Wide**: parent partition -> multiple child partitions (shuffle required)

## 4. Closure Detection

Code outside operators runs on Driver; inside operators runs on Executors. Spark checks serialization before sending closures.

## 5. SparkSQL

- **DataSet**: Strongly typed, each row can differ
- **DataFrame**: Weakly typed, all rows share same type`
  },
  {
    id: 18,
    title: 'Spark Join Methods: Broadcast, Shuffle Hash, and Sort Merge',
    date: '2021-06-15',
    tags: ['Spark', 'Big Data'],
    summary: 'Deep dive into three Spark join strategies with a real-world debugging case of broadcast timeout.',
    content: `## 1. The Problem

A Spark program failed with broadcast timeout after several days of running:
\`\`\`
SparkException: Could not execute broadcast in 1800 secs
\`\`\`

## 2. Root Cause

Both DataFrames had ~100K rows (similar sizes). Spark defaulted to Broadcast Join, designed for large + small table joins. Since both tables were similar in size, broadcasting timed out.

**Solution**: \`spark.sql.autoBroadcastJoinThreshold = -1\`

## 3. The Three Join Methods

| Method | Type | Use Case |
|--------|------|----------|
| Broadcast Hash Join | Hash | Large table + very small table |
| Shuffle Hash Join | Hash | Large table + small table |
| Sort Merge Join | Merge | Two large tables |

### Hash Join Process
1. Small table -> Build Table (builds hash table)
2. Large table -> Probe Table
3. Hash each row by join key into buckets
4. Scan Probe Table, match in same buckets
5. Complexity: O(a+b), Build Table must fit in memory

### Broadcast Hash Join
1. Broadcast small table to all nodes
2. Local hash join on each Executor
3. Requirement: broadcast table < \`autoBroadcastJoinThreshold\` (default 10MB)

### Shuffle Hash Join
1. Shuffle both tables by join key
2. Local hash join on each partition

### Sort Merge Join
1. Shuffle both tables by join key
2. Sort each partition
3. Merge sorted partitions on matching keys

## 4. Conclusion

Disable broadcast join (\`autoBroadcastJoinThreshold = -1\`) when joining similarly-sized tables to let Spark choose a more appropriate strategy.`
  },
  {
    id: 19,
    title: 'Two Ways to Call Python from Scala',
    date: '2020-08-05',
    tags: ['Scala', 'Python', 'Spark'],
    summary: 'Comparing command-line execution and RESTful API approaches for calling Python scripts from Scala in Spark environments.',
    content: `## 1. Command-Line Method

Using \`Runtime.getRuntime.exec()\`:
\`\`\`scala
def TestCmdExec(args: Array[String]) {
    var exeStr = "python D:/script.py "
    exeStr += " arg1 " + " arg2 "
    var proc = Runtime.getRuntime.exec(exeStr)
    var ir = new InputStreamReader(proc.getInputStream, "GBK")
    var input = new LineNumberReader(ir)
    var result = input.readLine()
    while (result != null) {
        println(result)
        result = input.readLine()
    }
    input.close(); ir.close()
    proc.waitFor()
}
\`\`\`

**Pros**: Simple for basic commands
**Cons**: Cumbersome for batch calls, fragile path management. Not recommended.

## 2. RESTful API Method (Recommended)

### Python Flask Server
Create Flask endpoints that accept parameters and return results:
\`\`\`python
app.run(host="0.0.0.0", port="5000")  # Allow LAN access
\`\`\`

### Scala Client (HttpClient 3.0.1)
For Spark 1.6 compatibility, use commons-httpclient:3.0.1:
\`\`\`scala
// POST request using PostMethod and StringRequestEntity
\`\`\`

### Important: HttpClient Version Compatibility

| Version | Spark 1.6 | Spark 2.3 |
|---------|-----------|-----------|
| HttpClient 4.x | No | Yes |
| HttpClient 3.x | Yes | Yes |

**Use 3.x for backward compatibility.** The APIs differ significantly between versions.`
  },
  {
    id: 20,
    title: 'Internship Record: Debugging Spark + Scala in Production',
    date: '2019-08-20',
    tags: ['Spark', 'Scala', 'Big Data'],
    summary: 'Real-world troubleshooting of Spark/Scala development issues including Maven conflicts, HttpClient version incompatibility, and cluster debugging.',
    content: `## Environment
- Spark 2.3, Scala 2.11.8, Hadoop 2.6.0-cdh5.15.1

## Task
Call Python from Scala in distributed mode. Server lacks Python environment -> wrap Python as RESTful service.

## Problems Encountered

### Maven Issues
- "Cannot find or load main class": Maven dependency conflicts
- LastUpdated files from interrupted downloads: batch-delete .lastupdate files
- Packaging: use clean -> package -> assembly

### The Week-Long NoSuchMethodError

Programs worked locally but failed on server with NoSuchMethodError related to HttpClient.

**Root cause**: Server had both Spark 1.6 and 2.3. Submit command used Spark 1.6, but code was built for Spark 2. HttpClient 4.x was incompatible with Spark 1.6.

**Solution**: Downgraded from HttpClient 4.5.5 to 3.0.1 (required rewriting HTTP client code). The older version worked on both Spark versions.

### Spark DataFrame Persistence Bug
In Spark 2.1.0 and earlier: if you persist df1 then unpersist its parent df0, df1 also gets unpersisted, forcing recalculation.

## Lessons Learned

1. Use lower versions of frameworks for backward compatibility
2. Be persistent when debugging - don't be afraid to keep trying
3. Carefully read the full error stack trace
4. Test on the actual deployment environment early`
  },
  {
    id: 21,
    title: 'FaceSwap Setup: Local Installation and Google Colab',
    date: '2020-11-10',
    tags: ['Python', 'Deep Learning'],
    summary: 'Two approaches to setting up FaceSwap: local installation with GPU troubleshooting, and free Google Colab setup.',
    content: `## 1. Local Installation

Follow: https://github.com/deepfakes/faceswap/blob/master/INSTALL.md

## 2. Common Issues

### win32console DLL Error
\`\`\`
ImportError: DLL load failed while importing win32console
\`\`\`
Solution: \`python3 pywin32_postinstall.py -install\`

### Slow pip Install
Change Anaconda mirror for speed. For git issues: manually download packages and comment out git commands in requirements_base.txt.

### GPU Not Working
Test GPU availability:
\`\`\`python
import tensorflow as tf
print('GPU', tf.test.is_gpu_available())
\`\`\`
Install CUDA Toolkit and cuDNN. Copy cudnn files to CUDA directories.

## 3. Google Colab Setup

Reference: https://github.com/RakaMaru/Faceswap_Google_Colab_Master

Steps:
1. Check assigned GPU, install dependencies
2. Mount Google Drive
3. Upload training data (face_a.zip, face_b.zip)
4. Clone FaceSwap repo (branch r1.0)
5. Install TensorFlow 1.15.0
6. Install FaceSwap NVIDIA requirements
7. Run training

Training is sufficient when loss A reaches ~0.02 and loss B reaches ~0.01.

## Pros and Cons

| Approach | Pros | Cons |
|----------|------|------|
| Local | Full control, persistent | Requires GPU, complex setup |
| Colab | Free GPU, easy setup | Unpredictable GPU allocation, session disconnects |`
  },
]
