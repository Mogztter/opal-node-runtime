/* Generated by Opal 0.11.99.dev */
Opal.modules["nodejs/kernel"] = function(Opal) {
  var TMP_$$$eq_3, TMP_$$_4, self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  Opal.add_stubs(['$to_str', '$new', '$to_s']);
  
  Opal.exit = process.exit;
  (function($base, $parent_nesting) {
    function $Kernel() {};
    var self = $Kernel = $module($base, 'Kernel', $Kernel);

    var def = self.prototype, $nesting = [self].concat($parent_nesting), TMP_Kernel_caller_1, TMP_Kernel_node_require_2;

    
    Opal.const_set($nesting[0], 'NODE_REQUIRE', require);
    
    Opal.def(self, '$caller', TMP_Kernel_caller_1 = function $$caller($a) {
      var $post_args, args, self = this;

      
      
      $post_args = Opal.slice.call(arguments, 0, arguments.length);
      
      args = $post_args;;
      
      var stack;
      try {
        var err = Error("my error");
        throw err;
      } catch(e) {
        stack = e.stack;
      }
      return stack.$split("\n").slice(3);
    ;
    }, TMP_Kernel_caller_1.$$arity = -1);
    
    Opal.def(self, '$node_require', TMP_Kernel_node_require_2 = function $$node_require(path) {
      var self = this;

      return $$($nesting, 'NODE_REQUIRE')(path.$to_str())
    }, TMP_Kernel_node_require_2.$$arity = 1);
  })($nesting[0], $nesting);
  Opal.const_set($nesting[0], 'ARGV', process.argv.slice(2));
  Opal.const_set($nesting[0], 'ENV', $$($nesting, 'Object').$new());
  Opal.defs($$($nesting, 'ENV'), '$[]=', TMP_$$$eq_3 = function(name, value) {
    var self = this;

    return process.env[name.$to_s()] = value.$to_s()
  }, TMP_$$$eq_3.$$arity = 2);
  return (Opal.defs($$($nesting, 'ENV'), '$[]', TMP_$$_4 = function(name) {
    var self = this;

    return process.env[name] || nil
  }, TMP_$$_4.$$arity = 1), nil) && '[]';
};

/* Generated by Opal 0.11.99.dev */
Opal.modules["nodejs/file"] = function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $gvars = Opal.gvars;

  Opal.add_stubs(['$raise', '$warn', '$const_get', '$new', '$const_defined?', '$const_set', '$include', '$node_require', '$size', '$respond_to?', '$path', '$join', '$call', '$exist?', '$realpath', '$!=', '$close', '$delete', '$match?', '$sub', '$attr_reader', '$to_enum', '$read', '$chomp', '$each_line']);
  
  
  var warnings = {}, errno_code, errno_codes = [
    'EACCES',
    'EISDIR',
    'EMFILE',
    'ENOENT',
    'EPERM'
  ];

  function handle_unsupported_feature(message) {
    switch (Opal.config.unsupported_features_severity) {
    case 'error':
      $$($nesting, 'Kernel').$raise($$($nesting, 'NotImplementedError'), message)
      break;
    case 'warning':
      warn(message)
      break;
    default: // ignore
      // noop
    }
  }
  function warn(string) {
    if (warnings[string]) {
      return;
    }
    warnings[string] = true;
    self.$warn(string);
  }
  function executeIOAction(action) {
    try {
      return action();
    } catch (error) {
      if (errno_codes.indexOf(error.code) >= 0) {
        var error_class = $$($nesting, 'Errno').$const_get(error.code)
        throw (error_class).$new(error.message);
      }
      throw error;
    }
  }

  for(var i = 0, ii = errno_codes.length; i < ii; i++) {
    errno_code = errno_codes[i];
    if (!$$($nesting, 'Errno')['$const_defined?'](errno_code)) {
      $$($nesting, 'Errno').$const_set(errno_code, $$($nesting, 'Class').$new($$($nesting, 'SystemCallError')))
    }
  }
;
  (function($base, $super, $parent_nesting) {
    function $File(){};
    var self = $File = $klass($base, $super, 'File', $File);

    var def = self.prototype, $nesting = [self].concat($parent_nesting), TMP_File_read_1, TMP_File_write_2, TMP_File_exist$q_3, TMP_File_realpath_4, TMP_File_join_5, TMP_File_directory$q_6, TMP_File_file$q_7, TMP_File_readable$q_8, TMP_File_size_9, TMP_File_open_10, TMP_File_stat_11, TMP_File_mtime_12, TMP_File_symlink$q_13, TMP_File_initialize_14, TMP_File_read_15, TMP_File_each_line_16, TMP_File_write_17, TMP_File_flush_18, TMP_File_close_19, TMP_File_mtime_20;
    if (self.__fs__ == null) self.__fs__ = nil;
    if (self.__path__ == null) self.__path__ = nil;

    def.eof = def.path = def.fd = nil;
    
    self.$include($$$($$$('::', 'IO'), 'Writable'));
    self.$include($$$($$$('::', 'IO'), 'Readable'));
    self.__fs__ = self.$node_require("fs");
    self.__path__ = self.$node_require("path");
    var __fs__ = self.__fs__;
    var __path__ = self.__path__;
    if ($truthy(__path__.sep !== $$($nesting, 'Separator'))) {
      Opal.const_set($nesting[0], 'ALT_SEPARATOR', __path__.sep)};
    Opal.defs(self, '$read', TMP_File_read_1 = function $$read(path) {
      var self = this;

      return executeIOAction(function(){return __fs__.readFileSync(path).toString()})
    }, TMP_File_read_1.$$arity = 1);
    Opal.defs(self, '$write', TMP_File_write_2 = function $$write(path, data) {
      var self = this;

      
      executeIOAction(function(){return __fs__.writeFileSync(path, data)});
      return data.$size();
    }, TMP_File_write_2.$$arity = 2);
    Opal.defs(self, '$exist?', TMP_File_exist$q_3 = function(path) {
      var self = this;

      
      if ($truthy(path['$respond_to?']("path"))) {
        path = path.$path()};
      return executeIOAction(function(){return __fs__.existsSync(path)});
    }, TMP_File_exist$q_3.$$arity = 1);
    Opal.defs(self, '$realpath', TMP_File_realpath_4 = function $$realpath(pathname, dir_string, cache) {
      var $iter = TMP_File_realpath_4.$$p, block = $iter || nil, self = this;

      if ($iter) TMP_File_realpath_4.$$p = null;
      
      
      if ($iter) TMP_File_realpath_4.$$p = null;;
      
      if (dir_string == null) {
        dir_string = nil;
      };
      
      if (cache == null) {
        cache = nil;
      };
      if ($truthy(dir_string)) {
        pathname = self.$join(dir_string, pathname)};
      if ((block !== nil)) {
        
      __fs__.realpath(pathname, cache, function(error, realpath){
        if (error) Opal.IOError.$new(error.message)
        else block.$call(realpath)
      })
      
      } else {
        return executeIOAction(function(){return __fs__.realpathSync(pathname, cache)})
      };
    }, TMP_File_realpath_4.$$arity = -2);
    Opal.defs(self, '$join', TMP_File_join_5 = function $$join($a) {
      var $post_args, paths, self = this;

      
      
      $post_args = Opal.slice.call(arguments, 0, arguments.length);
      
      paths = $post_args;;
      return __path__.posix.join.apply(__path__, paths);
    }, TMP_File_join_5.$$arity = -1);
    Opal.defs(self, '$directory?', TMP_File_directory$q_6 = function(path) {
      var self = this, result = nil, realpath = nil;

      
      if ($truthy(self['$exist?'](path))) {
      } else {
        return false
      };
      result = executeIOAction(function(){return !!__fs__.lstatSync(path).isDirectory()});
      if ($truthy(result)) {
      } else {
        
        realpath = self.$realpath(path);
        if ($truthy(realpath['$!='](path))) {
          result = executeIOAction(function(){return !!__fs__.lstatSync(realpath).isDirectory()})};
      };
      return result;
    }, TMP_File_directory$q_6.$$arity = 1);
    Opal.defs(self, '$file?', TMP_File_file$q_7 = function(path) {
      var self = this, result = nil, realpath = nil;

      
      if ($truthy(self['$exist?'](path))) {
      } else {
        return false
      };
      result = executeIOAction(function(){return !!__fs__.lstatSync(path).isFile()});
      if ($truthy(result)) {
      } else {
        
        realpath = self.$realpath(path);
        if ($truthy(realpath['$!='](path))) {
          result = executeIOAction(function(){return !!__fs__.lstatSync(realpath).isFile()})};
      };
      return result;
    }, TMP_File_file$q_7.$$arity = 1);
    Opal.defs(self, '$readable?', TMP_File_readable$q_8 = function(path) {
      var self = this;

      
      if ($truthy(self['$exist?'](path))) {
      } else {
        return false
      };
      return "" + "\n" + "      try {\n" + "        __fs__.accessSync(path, __fs__.R_OK);\n" + "        return true;\n" + "      } catch (error) {\n" + "        return false;\n" + "      }\n" + "    ";
    }, TMP_File_readable$q_8.$$arity = 1);
    Opal.defs(self, '$size', TMP_File_size_9 = function $$size(path) {
      var self = this;

      return executeIOAction(function(){return __fs__.lstatSync(path).size});
    }, TMP_File_size_9.$$arity = 1);
    Opal.defs(self, '$open', TMP_File_open_10 = function $$open(path, mode) {
      var $iter = TMP_File_open_10.$$p, $yield = $iter || nil, self = this, file = nil;

      if ($iter) TMP_File_open_10.$$p = null;
      
      
      if (mode == null) {
        mode = "r";
      };
      file = self.$new(path, mode);
      if (($yield !== nil)) {
        
        return (function() { try {
        return Opal.yield1($yield, file);
        } finally {
          file.$close()
        }; })();
      } else {
        return file
      };
    }, TMP_File_open_10.$$arity = -2);
    Opal.defs(self, '$stat', TMP_File_stat_11 = function $$stat(path) {
      var self = this;

      
      if ($truthy(path['$respond_to?']("path"))) {
        path = path.$path()};
      return $$$($$($nesting, 'File'), 'Stat').$new(path);
    }, TMP_File_stat_11.$$arity = 1);
    Opal.defs(self, '$mtime', TMP_File_mtime_12 = function $$mtime(path) {
      var self = this;

      return executeIOAction(function(){return __fs__.statSync(path).mtime})
    }, TMP_File_mtime_12.$$arity = 1);
    Opal.defs(self, '$symlink?', TMP_File_symlink$q_13 = function(path) {
      var self = this;

      return executeIOAction(function(){return __fs__.lstatSync(path).isSymbolicLink()})
    }, TMP_File_symlink$q_13.$$arity = 1);
    
    Opal.def(self, '$initialize', TMP_File_initialize_14 = function $$initialize(path, flags) {
      var self = this, encoding_option_rx = nil;

      
      
      if (flags == null) {
        flags = "r";
      };
      flags = flags.$delete("b");
      encoding_option_rx = /:(.*)/;
      if ($truthy(encoding_option_rx['$match?'](flags))) {
        
        handle_unsupported_feature("Encoding option (:encoding) is unsupported by Node.js openSync method and will be removed.");
        flags = flags.$sub(encoding_option_rx, "");};
      self.path = path;
      self.flags = flags;
      return (self.fd = executeIOAction(function(){return __fs__.openSync(path, flags)}));
    }, TMP_File_initialize_14.$$arity = -2);
    self.$attr_reader("path");
    
    Opal.def(self, '$read', TMP_File_read_15 = function $$read() {
      var self = this, res = nil;

      if ($truthy(self.eof)) {
        return ""
      } else {
        
        res = executeIOAction(function(){return __fs__.readFileSync(self.path).toString()});
        self.eof = true;
        self.lineno = res.$size();
        return res;
      }
    }, TMP_File_read_15.$$arity = 0);
    
    Opal.def(self, '$each_line', TMP_File_each_line_16 = function $$each_line(separator) {
      var $iter = TMP_File_each_line_16.$$p, block = $iter || nil, self = this, lines = nil;
      if ($gvars["/"] == null) $gvars["/"] = nil;

      if ($iter) TMP_File_each_line_16.$$p = null;
      
      
      if ($iter) TMP_File_each_line_16.$$p = null;;
      
      if (separator == null) {
        separator = $gvars["/"];
      };
      if ($truthy(self.eof)) {
        return (function() {if ((block !== nil)) {
          return self
        } else {
          return [].$to_enum()
        }; return nil; })()};
      if ((block !== nil)) {
        
        lines = $$($nesting, 'File').$read(self.path);
        
        self.eof = false;
        self.lineno = 0;
        var chomped  = lines.$chomp(),
            trailing = lines.length != chomped.length,
            splitted = chomped.split(separator);
        for (var i = 0, length = splitted.length; i < length; i++) {
          self.lineno += 1;
          if (i < length - 1 || trailing) {
            Opal.yield1(block, splitted[i] + separator);
          }
          else {
            Opal.yield1(block, splitted[i]);
          }
        }
        self.eof = true;
      ;
        return self;
      } else {
        return self.$read().$each_line()
      };
    }, TMP_File_each_line_16.$$arity = -1);
    
    Opal.def(self, '$write', TMP_File_write_17 = function $$write(string) {
      var self = this;

      return executeIOAction(function(){return __fs__.writeSync(self.fd, string)})
    }, TMP_File_write_17.$$arity = 1);
    
    Opal.def(self, '$flush', TMP_File_flush_18 = function $$flush() {
      var self = this;

      return executeIOAction(function(){return __fs__.fsyncSync(self.fd)})
    }, TMP_File_flush_18.$$arity = 0);
    
    Opal.def(self, '$close', TMP_File_close_19 = function $$close() {
      var self = this;

      return executeIOAction(function(){return __fs__.closeSync(self.fd)})
    }, TMP_File_close_19.$$arity = 0);
    return (Opal.def(self, '$mtime', TMP_File_mtime_20 = function $$mtime() {
      var self = this;

      return executeIOAction(function(){return __fs__.statSync(self.path).mtime})
    }, TMP_File_mtime_20.$$arity = 0), nil) && 'mtime';
  })($nesting[0], $$($nesting, 'IO'), $nesting);
  return (function($base, $super, $parent_nesting) {
    function $Stat(){};
    var self = $Stat = $klass($base, $super, 'Stat', $Stat);

    var def = self.prototype, $nesting = [self].concat($parent_nesting), TMP_Stat_initialize_21, TMP_Stat_file$q_22, TMP_Stat_mtime_23;
    if (self.__fs__ == null) self.__fs__ = nil;

    def.path = nil;
    
    self.__fs__ = self.$node_require("fs");
    var __fs__ = self.__fs__;
    
    Opal.def(self, '$initialize', TMP_Stat_initialize_21 = function $$initialize(path) {
      var self = this;

      return (self.path = path)
    }, TMP_Stat_initialize_21.$$arity = 1);
    
    Opal.def(self, '$file?', TMP_Stat_file$q_22 = function() {
      var self = this;

      return executeIOAction(function(){return __fs__.statSync(self.path).isFile()})
    }, TMP_Stat_file$q_22.$$arity = 0);
    return (Opal.def(self, '$mtime', TMP_Stat_mtime_23 = function $$mtime() {
      var self = this;

      return executeIOAction(function(){return __fs__.statSync(self.path).mtime})
    }, TMP_Stat_mtime_23.$$arity = 0), nil) && 'mtime';
  })($$($nesting, 'File'), null, $nesting);
};

/* Generated by Opal 0.11.99.dev */
Opal.modules["nodejs/dir"] = function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $send = Opal.send;

  Opal.add_stubs(['$node_require', '$respond_to?', '$flat_map', '$to_path', '$coerce_to!']);
  return (function($base, $super, $parent_nesting) {
    function $Dir(){};
    var self = $Dir = $klass($base, $super, 'Dir', $Dir);

    var def = self.prototype, $nesting = [self].concat($parent_nesting);
    if (self.__glob__ == null) self.__glob__ = nil;
    if (self.__fs__ == null) self.__fs__ = nil;

    
    self.__glob__ = self.$node_require("glob");
    self.__fs__ = self.$node_require("fs");
    var __glob__ = self.__glob__;
    var __fs__ = self.__fs__;
    return (function(self, $parent_nesting) {
      var def = self.prototype, $nesting = [self].concat($parent_nesting), TMP_$$_1, TMP_pwd_2, TMP_mkdir_3, TMP_entries_4, TMP_glob_5;

      
      
      Opal.def(self, '$[]', TMP_$$_1 = function(glob) {
        var self = this;

        return __glob__.sync(glob)
      }, TMP_$$_1.$$arity = 1);
      
      Opal.def(self, '$pwd', TMP_pwd_2 = function $$pwd() {
        var self = this;

        return process.cwd();
      }, TMP_pwd_2.$$arity = 0);
      
      Opal.def(self, '$mkdir', TMP_mkdir_3 = function $$mkdir(path) {
        var self = this;

        return __fs__.mkdirSync(path)
      }, TMP_mkdir_3.$$arity = 1);
      
      Opal.def(self, '$entries', TMP_entries_4 = function $$entries(dirname) {
        var self = this;

        
        var result = [];
        var entries = __fs__.readdirSync(dirname);
        for (var i = 0, ii = entries.length; i < ii; i++) {
          result.push(entries[i]);
        }
        return result;
      
      }, TMP_entries_4.$$arity = 1);
      
      Opal.def(self, '$glob', TMP_glob_5 = function $$glob(pattern) {
        var TMP_6, self = this;

        
        if ($truthy(pattern['$respond_to?']("each"))) {
        } else {
          pattern = [pattern]
        };
        return $send(pattern, 'flat_map', [], (TMP_6 = function(subpattern){var self = TMP_6.$$s || this;

        
          
          if (subpattern == null) {
            subpattern = nil;
          };
          if ($truthy(subpattern['$respond_to?']("to_path"))) {
            subpattern = subpattern.$to_path()};
          subpattern = $$($nesting, 'Opal')['$coerce_to!'](subpattern, $$($nesting, 'String'), "to_str");
          return __glob__.sync(subpattern);;}, TMP_6.$$s = self, TMP_6.$$arity = 1, TMP_6));
      }, TMP_glob_5.$$arity = 1);
      return Opal.alias(self, "getwd", "pwd");
    })(Opal.get_singleton_class(self), $nesting);
  })($nesting[0], null, $nesting)
};

/* Generated by Opal 0.11.99.dev */
Opal.modules["nodejs/io"] = function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var TMP_5, TMP_6, self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $lambda = Opal.lambda, $send = Opal.send, $writer = nil;

  Opal.add_stubs(['$node_require', '$attr_reader', '$write', '$read', '$write_proc=', '$-', '$tty=']);
  
  
  function executeIOAction(action) {
    try {
      return action();
    } catch (error) {
      if (error.code === 'EACCES' ||
          error.code === 'EISDIR' ||
          error.code === 'EMFILE' ||
          error.code === 'ENOENT' ||
          error.code === 'EPERM') {
        throw Opal.IOError.$new(error.message)
      }
      throw error;
    }
  }
;
  (function($base, $super, $parent_nesting) {
    function $IO(){};
    var self = $IO = $klass($base, $super, 'IO', $IO);

    var def = self.prototype, $nesting = [self].concat($parent_nesting), TMP_IO_initialize_1, TMP_IO_write_2, TMP_IO_read_3, TMP_IO_binread_4;
    if (self.__fs__ == null) self.__fs__ = nil;

    
    self.__fs__ = self.$node_require("fs");
    var __fs__ = self.__fs__;
    self.$attr_reader("eof");
    self.$attr_reader("lineno");
    
    Opal.def(self, '$initialize', TMP_IO_initialize_1 = function $$initialize() {
      var self = this;

      
      self.eof = false;
      return (self.lineno = 0);
    }, TMP_IO_initialize_1.$$arity = 0);
    Opal.defs(self, '$write', TMP_IO_write_2 = function $$write(path, data) {
      var self = this;

      return $$($nesting, 'File').$write(path, data)
    }, TMP_IO_write_2.$$arity = 2);
    Opal.defs(self, '$read', TMP_IO_read_3 = function $$read(path) {
      var self = this;

      return $$($nesting, 'File').$read(path)
    }, TMP_IO_read_3.$$arity = 1);
    return (Opal.defs(self, '$binread', TMP_IO_binread_4 = function $$binread(path) {
      var self = this;

      return executeIOAction(function(){return __fs__.readFileSync(path).toString('binary')})
    }, TMP_IO_binread_4.$$arity = 1), nil) && 'binread';
  })($nesting[0], null, $nesting);
  
  $writer = [$lambda((TMP_5 = function(string){var self = TMP_5.$$s || this;

  
    
    if (string == null) {
      string = nil;
    };
    return process.stdout.write(string);;}, TMP_5.$$s = self, TMP_5.$$arity = 1, TMP_5))];
  $send($$($nesting, 'STDOUT'), 'write_proc=', Opal.to_a($writer));
  $writer[$rb_minus($writer["length"], 1)];;
  
  $writer = [$lambda((TMP_6 = function(string){var self = TMP_6.$$s || this;

  
    
    if (string == null) {
      string = nil;
    };
    return process.stderr.write(string);;}, TMP_6.$$s = self, TMP_6.$$arity = 1, TMP_6))];
  $send($$($nesting, 'STDERR'), 'write_proc=', Opal.to_a($writer));
  $writer[$rb_minus($writer["length"], 1)];;
  
  $writer = [true];
  $send($$($nesting, 'STDOUT'), 'tty=', Opal.to_a($writer));
  $writer[$rb_minus($writer["length"], 1)];;
  
  $writer = [true];
  $send($$($nesting, 'STDERR'), 'tty=', Opal.to_a($writer));
  return $writer[$rb_minus($writer["length"], 1)];;
};

/* Generated by Opal 0.11.99.dev */
Opal.modules["nodejs/open-uri"] = function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  Opal.add_stubs(['$node_require']);
  return (function($base, $parent_nesting) {
    function $OpenURI() {};
    var self = $OpenURI = $module($base, 'OpenURI', $OpenURI);

    var def = self.prototype, $nesting = [self].concat($parent_nesting), TMP_OpenURI_request_1;
    if (self.__xmlhttprequest__ == null) self.__xmlhttprequest__ = nil;

    
    self.__xmlhttprequest__ = self.$node_require("xmlhttprequest");
    var __XMLHttpRequest__ = self.__xmlhttprequest__.XMLHttpRequest;
    Opal.defs(self, '$request', TMP_OpenURI_request_1 = function $$request(uri) {
      var self = this;

      
      var xhr = new __XMLHttpRequest__();
      xhr.open('GET', uri, false);
      xhr.send();
      return xhr;
    
    }, TMP_OpenURI_request_1.$$arity = 1);
  })($nesting[0], $nesting)
};

/* Generated by Opal 0.11.99.dev */
Opal.modules["nodejs"] = function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  Opal.add_stubs(['$require']);
  
  (function($base, $parent_nesting) {
    function $NodeJS() {};
    var self = $NodeJS = $module($base, 'NodeJS', $NodeJS);

    var def = self.prototype, $nesting = [self].concat($parent_nesting);

    nil
  })($nesting[0], $nesting);
  self.$require("nodejs/kernel");
  self.$require("nodejs/file");
  self.$require("nodejs/dir");
  self.$require("nodejs/io");
  return self.$require("nodejs/open-uri");
};
