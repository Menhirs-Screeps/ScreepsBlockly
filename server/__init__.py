import os
import sys

# Adding the local-packages to the sys path
local_packages_path = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                   'local-packages')
sys.path.insert(0, local_packages_path)
