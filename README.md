# habitablePlanetsApp
This app takes a data of Kepler Telescope that is available on Exoplanet Archive and find the Habitable Planets. The data is available in csv file.
We read the file using fs module, we use createReadStream to read data as a Stream. This makes processing of data better and more efficient for our Node process.
Once our data is read in form of stream, we use Event Emitters provided by fs to read data. There are several events that we can catch on event emitter i.e 
data, error and end. 
Once data is processed using fs stream, we can then refine the data using 3rd party module named csv-parse. We use it to convert the raw data into array of objects, where each object
represents each planet. We then manipulate the properties of object to fetch most inhabitable planets list.
