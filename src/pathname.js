/* Generated by Opal 0.11.0.dev */
Opal.modules["corelib/comparable"] = function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $scope = Opal, $scopes = [Opal], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  Opal.add_stubs(['$===', '$>', '$<', '$equal?', '$<=>', '$normalize', '$raise', '$class']);
  return (function($base, $visibility_scopes) {
    var $Comparable, self = $Comparable = $module($base, 'Comparable');

    var def = self.$$proto, $scope = self.$$scope, $scopes = $visibility_scopes.slice().concat($scope), TMP_Comparable_normalize_1, TMP_Comparable_$eq$eq_2, TMP_Comparable_$gt_3, TMP_Comparable_$gt$eq_4, TMP_Comparable_$lt_5, TMP_Comparable_$lt$eq_6, TMP_Comparable_between$q_7;

    
    Opal.defs(self, '$normalize', TMP_Comparable_normalize_1 = function $$normalize(what) {
      var $a, self = this;

      
      if ((($a = Opal.const_get($scopes, 'Integer', true, true)['$==='](what)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return what};
      if ((($a = $rb_gt(what, 0)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return 1};
      if ((($a = $rb_lt(what, 0)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return -1};
      return 0;
    }, TMP_Comparable_normalize_1.$$arity = 1);
    Opal.defn(self, '$==', TMP_Comparable_$eq$eq_2 = function(other) {
      var $a, self = this, cmp = nil;

      try {
        
        if ((($a = self['$equal?'](other)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          return true};
        
      if (self["$<=>"] == Opal.Kernel["$<=>"]) {
        return false;
      }

      // check for infinite recursion
      if (self.$$comparable) {
        delete self.$$comparable;
        return false;
      }
    ;
        if ((($a = (cmp = self['$<=>'](other))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          } else {
          return false
        };
        return Opal.const_get($scopes, 'Comparable', true, true).$normalize(cmp) == 0;
      } catch ($err) {
        if (Opal.rescue($err, [Opal.const_get($scopes, 'StandardError', true, true)])) {
          try {
            return false
          } finally { Opal.pop_exception() }
        } else { throw $err; }
      }
    }, TMP_Comparable_$eq$eq_2.$$arity = 1);
    Opal.defn(self, '$>', TMP_Comparable_$gt_3 = function(other) {
      var $a, self = this, cmp = nil;

      
      if ((($a = (cmp = self['$<=>'](other))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$raise(Opal.const_get($scopes, 'ArgumentError', true, true), "" + "comparison of " + (self.$class()) + " with " + (other.$class()) + " failed")
      };
      return Opal.const_get($scopes, 'Comparable', true, true).$normalize(cmp) > 0;
    }, TMP_Comparable_$gt_3.$$arity = 1);
    Opal.defn(self, '$>=', TMP_Comparable_$gt$eq_4 = function(other) {
      var $a, self = this, cmp = nil;

      
      if ((($a = (cmp = self['$<=>'](other))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$raise(Opal.const_get($scopes, 'ArgumentError', true, true), "" + "comparison of " + (self.$class()) + " with " + (other.$class()) + " failed")
      };
      return Opal.const_get($scopes, 'Comparable', true, true).$normalize(cmp) >= 0;
    }, TMP_Comparable_$gt$eq_4.$$arity = 1);
    Opal.defn(self, '$<', TMP_Comparable_$lt_5 = function(other) {
      var $a, self = this, cmp = nil;

      
      if ((($a = (cmp = self['$<=>'](other))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$raise(Opal.const_get($scopes, 'ArgumentError', true, true), "" + "comparison of " + (self.$class()) + " with " + (other.$class()) + " failed")
      };
      return Opal.const_get($scopes, 'Comparable', true, true).$normalize(cmp) < 0;
    }, TMP_Comparable_$lt_5.$$arity = 1);
    Opal.defn(self, '$<=', TMP_Comparable_$lt$eq_6 = function(other) {
      var $a, self = this, cmp = nil;

      
      if ((($a = (cmp = self['$<=>'](other))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$raise(Opal.const_get($scopes, 'ArgumentError', true, true), "" + "comparison of " + (self.$class()) + " with " + (other.$class()) + " failed")
      };
      return Opal.const_get($scopes, 'Comparable', true, true).$normalize(cmp) <= 0;
    }, TMP_Comparable_$lt$eq_6.$$arity = 1);
    Opal.defn(self, '$between?', TMP_Comparable_between$q_7 = function(min, max) {
      var self = this;

      
      if ($rb_lt(self, min)) {
        return false};
      if ($rb_gt(self, max)) {
        return false};
      return true;
    }, TMP_Comparable_between$q_7.$$arity = 2);
  })($scope.base, $scopes)
};

/* Generated by Opal 0.11.0.dev */
Opal.modules["pathname"] = function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $scope = Opal, $scopes = [Opal], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $module = Opal.module;

  Opal.add_stubs(['$require', '$include', '$quote', '$===', '$to_s', '$path', '$respond_to?', '$to_path', '$is_a?', '$nil?', '$raise', '$class', '$==', '$attr_reader', '$!', '$relative?', '$chop_basename', '$basename', '$=~', '$new', '$source', '$[]', '$rindex', '$sub', '$absolute?', '$expand_path', '$plus', '$unshift', '$length', '$!=', '$empty?', '$first', '$shift', '$+', '$join', '$dirname', '$pop', '$reverse_each', '$directory?', '$extname', '$<=>', '$nonzero?', '$proc', '$casecmp', '$cleanpath', '$inspect', '$include?', '$fill', '$map', '$entries']);
  
  self.$require("corelib/comparable");
  (function($base, $super, $visibility_scopes) {
    function $Pathname(){};
    var self = $Pathname = $klass($base, $super, 'Pathname', $Pathname);

    var def = self.$$proto, $scope = self.$$scope, $scopes = $visibility_scopes.slice().concat($scope), TMP_Pathname_initialize_1, TMP_Pathname_$eq$eq_2, TMP_Pathname_absolute$q_3, TMP_Pathname_relative$q_4, TMP_Pathname_chop_basename_5, TMP_Pathname_root$q_6, TMP_Pathname_parent_7, TMP_Pathname_sub_8, TMP_Pathname_cleanpath_9, TMP_Pathname_to_path_10, TMP_Pathname_hash_11, TMP_Pathname_expand_path_12, TMP_Pathname_$_13, TMP_Pathname_plus_14, TMP_Pathname_join_16, TMP_Pathname_split_17, TMP_Pathname_dirname_18, TMP_Pathname_basename_19, TMP_Pathname_directory$q_20, TMP_Pathname_extname_21, TMP_Pathname_$lt$eq$gt_22, $a, TMP_Pathname_23, TMP_Pathname_24, TMP_Pathname_relative_path_from_25, TMP_Pathname_entries_27;

    def.path = nil;
    
    self.$include(Opal.const_get($scopes, 'Comparable', true, true));
    Opal.cdecl($scope, 'SEPARATOR_PAT', new RegExp(Opal.const_get($scopes, 'Regexp', true, true).$quote(Opal.const_get([Opal.const_get($scopes, 'File', true, true).$$scope], 'SEPARATOR', true, true))));
    Opal.defn(self, '$initialize', TMP_Pathname_initialize_1 = function $$initialize(path) {
      var $a, self = this;

      
      if ((($a = Opal.const_get($scopes, 'Pathname', true, true)['$==='](path)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        self.path = path.$path().$to_s()
      } else if ((($a = path['$respond_to?']("to_path")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        self.path = path.$to_path()
      } else if ((($a = path['$is_a?'](Opal.const_get($scopes, 'String', true, true))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        self.path = path
      } else if ((($a = path['$nil?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        self.$raise(Opal.const_get($scopes, 'TypeError', true, true), "no implicit conversion of nil into String")
        } else {
        self.$raise(Opal.const_get($scopes, 'TypeError', true, true), "" + "no implicit conversion of " + (path.$class()) + " into String")
      };
      if (self.path['$==']("\u0000")) {
        return self.$raise(Opal.const_get($scopes, 'ArgumentError', true, true))
        } else {
        return nil
      };
    }, TMP_Pathname_initialize_1.$$arity = 1);
    self.$attr_reader("path");
    Opal.defn(self, '$==', TMP_Pathname_$eq$eq_2 = function(other) {
      var self = this;

      return other.$path()['$=='](self.path)
    }, TMP_Pathname_$eq$eq_2.$$arity = 1);
    Opal.defn(self, '$absolute?', TMP_Pathname_absolute$q_3 = function() {
      var self = this;

      return self['$relative?']()['$!']()
    }, TMP_Pathname_absolute$q_3.$$arity = 0);
    Opal.defn(self, '$relative?', TMP_Pathname_relative$q_4 = function() {
      var $a, $b, $c, self = this, path = nil, r = nil;

      
      path = self.path;
      while ((($b = (r = self.$chop_basename(path))) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        $c = r, $b = Opal.to_ary($c), (path = ($b[0] == null ? nil : $b[0])), $c
      };
      return path['$==']("");
    }, TMP_Pathname_relative$q_4.$$arity = 0);
    Opal.defn(self, '$chop_basename', TMP_Pathname_chop_basename_5 = function $$chop_basename(path) {
      var $a, self = this, base = nil;

      
      base = Opal.const_get($scopes, 'File', true, true).$basename(path);
      if ((($a = Opal.const_get($scopes, 'Regexp', true, true).$new("" + "^" + (Opal.const_get([Opal.const_get($scopes, 'Pathname', true, true).$$scope], 'SEPARATOR_PAT', true, true).$source()) + "?$")['$=~'](base)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return nil
        } else {
        return [path['$[]'](0, path.$rindex(base)), base]
      };
    }, TMP_Pathname_chop_basename_5.$$arity = 1);
    Opal.defn(self, '$root?', TMP_Pathname_root$q_6 = function() {
      var self = this;

      return self.path['$==']("/")
    }, TMP_Pathname_root$q_6.$$arity = 0);
    Opal.defn(self, '$parent', TMP_Pathname_parent_7 = function $$parent() {
      var $a, self = this, new_path = nil;

      
      new_path = self.path.$sub(/\/([^\/]+\/?$)/, "");
      if (new_path['$==']("")) {
        new_path = (function() {if ((($a = self['$absolute?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          return "/"
          } else {
          return "."
        }; return nil; })()};
      return Opal.const_get($scopes, 'Pathname', true, true).$new(new_path);
    }, TMP_Pathname_parent_7.$$arity = 0);
    Opal.defn(self, '$sub', TMP_Pathname_sub_8 = function $$sub($a_rest) {
      var self = this, args;

      var $args_len = arguments.length, $rest_len = $args_len - 0;
      if ($rest_len < 0) { $rest_len = 0; }
      args = new Array($rest_len);
      for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
        args[$arg_idx - 0] = arguments[$arg_idx];
      }
      return Opal.const_get($scopes, 'Pathname', true, true).$new($send(self.path, 'sub', Opal.to_a(args)))
    }, TMP_Pathname_sub_8.$$arity = -1);
    Opal.defn(self, '$cleanpath', TMP_Pathname_cleanpath_9 = function $$cleanpath() {
      var self = this;

      return Opal.normalize(self.path)
    }, TMP_Pathname_cleanpath_9.$$arity = 0);
    Opal.defn(self, '$to_path', TMP_Pathname_to_path_10 = function $$to_path() {
      var self = this;

      return self.path
    }, TMP_Pathname_to_path_10.$$arity = 0);
    Opal.defn(self, '$hash', TMP_Pathname_hash_11 = function $$hash() {
      var self = this;

      return self.path
    }, TMP_Pathname_hash_11.$$arity = 0);
    Opal.defn(self, '$expand_path', TMP_Pathname_expand_path_12 = function $$expand_path() {
      var self = this;

      return Opal.const_get($scopes, 'File', true, true).$expand_path(self.path)
    }, TMP_Pathname_expand_path_12.$$arity = 0);
    Opal.defn(self, '$+', TMP_Pathname_$_13 = function(other) {
      var $a, self = this;

      
      if ((($a = Opal.const_get($scopes, 'Pathname', true, true)['$==='](other)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        other = Opal.const_get($scopes, 'Pathname', true, true).$new(other)
      };
      return Opal.const_get($scopes, 'Pathname', true, true).$new(self.$plus(self.path, other.$to_s()));
    }, TMP_Pathname_$_13.$$arity = 1);
    Opal.defn(self, '$plus', TMP_Pathname_plus_14 = function $$plus(path1, path2) {
      var $a, $b, $c, $d, self = this, prefix2 = nil, index_list2 = nil, basename_list2 = nil, r2 = nil, basename2 = nil, prefix1 = nil, r1 = nil, basename1 = nil, suffix2 = nil;

      
      prefix2 = path2;
      index_list2 = [];
      basename_list2 = [];
      while ((($b = (r2 = self.$chop_basename(prefix2))) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        
        $c = r2, $b = Opal.to_ary($c), (prefix2 = ($b[0] == null ? nil : $b[0])), (basename2 = ($b[1] == null ? nil : $b[1])), $c;
        index_list2.$unshift(prefix2.$length());
        basename_list2.$unshift(basename2);
      };
      if ((($a = prefix2['$!=']("")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return path2};
      prefix1 = path1;
      while ((($b = true) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        
        while ((($c = ($d = basename_list2['$empty?']()['$!'](), $d !== false && $d !== nil && $d != null ?basename_list2.$first()['$=='](".") : $d)) !== nil && $c != null && (!$c.$$is_boolean || $c == true))) {
          
          index_list2.$shift();
          basename_list2.$shift();
        };
        if ((($b = (r1 = self.$chop_basename(prefix1))) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
          } else {
          break;
        };
        $c = r1, $b = Opal.to_ary($c), (prefix1 = ($b[0] == null ? nil : $b[0])), (basename1 = ($b[1] == null ? nil : $b[1])), $c;
        if (basename1['$=='](".")) {
          continue;};
        if ((($b = ((($c = ((($d = basename1['$==']("..")) !== false && $d !== nil && $d != null) ? $d : basename_list2['$empty?']())) !== false && $c !== nil && $c != null) ? $c : basename_list2.$first()['$!='](".."))) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
          
          prefix1 = $rb_plus(prefix1, basename1);
          break;;};
        index_list2.$shift();
        basename_list2.$shift();
      };
      r1 = self.$chop_basename(prefix1);
      if ((($a = ($b = r1['$!'](), $b !== false && $b !== nil && $b != null ?new RegExp(Opal.const_get($scopes, 'SEPARATOR_PAT', true, true))['$=~'](Opal.const_get($scopes, 'File', true, true).$basename(prefix1)) : $b)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        while ((($b = ($c = basename_list2['$empty?']()['$!'](), $c !== false && $c !== nil && $c != null ?basename_list2.$first()['$==']("..") : $c)) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
          
          index_list2.$shift();
          basename_list2.$shift();
        }};
      if ((($a = basename_list2['$empty?']()['$!']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        
        suffix2 = path2['$[]'](Opal.Range.$new(index_list2.$first(), -1, false));
        if (r1 !== false && r1 !== nil && r1 != null) {
          return Opal.const_get($scopes, 'File', true, true).$join(prefix1, suffix2)
          } else {
          return $rb_plus(prefix1, suffix2)
        };
      } else if (r1 !== false && r1 !== nil && r1 != null) {
        return prefix1
        } else {
        return Opal.const_get($scopes, 'File', true, true).$dirname(prefix1)
      };
    }, TMP_Pathname_plus_14.$$arity = 2);
    Opal.defn(self, '$join', TMP_Pathname_join_16 = function $$join($a_rest) {try {

      var $b, TMP_15, self = this, args, result = nil;

      var $args_len = arguments.length, $rest_len = $args_len - 0;
      if ($rest_len < 0) { $rest_len = 0; }
      args = new Array($rest_len);
      for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
        args[$arg_idx - 0] = arguments[$arg_idx];
      }
      
      if ((($b = args['$empty?']()) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        return self};
      result = args.$pop();
      if ((($b = Opal.const_get($scopes, 'Pathname', true, true)['$==='](result)) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        } else {
        result = Opal.const_get($scopes, 'Pathname', true, true).$new(result)
      };
      if ((($b = result['$absolute?']()) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        return result};
      $send(args, 'reverse_each', [], (TMP_15 = function(arg){var self = TMP_15.$$s || this, $a;
if (arg == null) arg = nil;
      
        if ((($a = Opal.const_get($scopes, 'Pathname', true, true)['$==='](arg)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          } else {
          arg = Opal.const_get($scopes, 'Pathname', true, true).$new(arg)
        };
        result = $rb_plus(arg, result);
        if ((($a = result['$absolute?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          Opal.ret(result)
          } else {
          return nil
        };}, TMP_15.$$s = self, TMP_15.$$arity = 1, TMP_15));
      return $rb_plus(self, result);
      } catch ($returner) { if ($returner === Opal.returner) { return $returner.$v } throw $returner; }
    }, TMP_Pathname_join_16.$$arity = -1);
    Opal.defn(self, '$split', TMP_Pathname_split_17 = function $$split() {
      var self = this;

      return [self.$dirname(), self.$basename()]
    }, TMP_Pathname_split_17.$$arity = 0);
    Opal.defn(self, '$dirname', TMP_Pathname_dirname_18 = function $$dirname() {
      var self = this;

      return Opal.const_get($scopes, 'Pathname', true, true).$new(Opal.const_get($scopes, 'File', true, true).$dirname(self.path))
    }, TMP_Pathname_dirname_18.$$arity = 0);
    Opal.defn(self, '$basename', TMP_Pathname_basename_19 = function $$basename() {
      var self = this;

      return Opal.const_get($scopes, 'Pathname', true, true).$new(Opal.const_get($scopes, 'File', true, true).$basename(self.path))
    }, TMP_Pathname_basename_19.$$arity = 0);
    Opal.defn(self, '$directory?', TMP_Pathname_directory$q_20 = function() {
      var self = this;

      return Opal.const_get($scopes, 'File', true, true)['$directory?'](self.path)
    }, TMP_Pathname_directory$q_20.$$arity = 0);
    Opal.defn(self, '$extname', TMP_Pathname_extname_21 = function $$extname() {
      var self = this;

      return Opal.const_get($scopes, 'File', true, true).$extname(self.path)
    }, TMP_Pathname_extname_21.$$arity = 0);
    Opal.defn(self, '$<=>', TMP_Pathname_$lt$eq$gt_22 = function(other) {
      var self = this;

      return self.$path()['$<=>'](other.$path())
    }, TMP_Pathname_$lt$eq$gt_22.$$arity = 1);
    Opal.alias(self, "eql?", "==");
    Opal.alias(self, "===", "==");
    Opal.alias(self, "to_str", "to_path");
    Opal.alias(self, "to_s", "to_path");
    Opal.cdecl($scope, 'SAME_PATHS', (function() {if ((($a = Opal.const_get([Opal.const_get($scopes, 'File', true, true).$$scope], 'FNM_SYSCASE', true, true)['$nonzero?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
      return $send(self, 'proc', [], (TMP_Pathname_23 = function(a, b){var self = TMP_Pathname_23.$$s || this;
if (a == null) a = nil;if (b == null) b = nil;
      return a.$casecmp(b)['$=='](0)}, TMP_Pathname_23.$$s = self, TMP_Pathname_23.$$arity = 2, TMP_Pathname_23))
      } else {
      return $send(self, 'proc', [], (TMP_Pathname_24 = function(a, b){var self = TMP_Pathname_24.$$s || this;
if (a == null) a = nil;if (b == null) b = nil;
      return a['$=='](b)}, TMP_Pathname_24.$$s = self, TMP_Pathname_24.$$arity = 2, TMP_Pathname_24))
    }; return nil; })());
    Opal.defn(self, '$relative_path_from', TMP_Pathname_relative_path_from_25 = function $$relative_path_from(base_directory) {
      var $a, $b, $c, $d, self = this, dest_directory = nil, dest_prefix = nil, dest_names = nil, r = nil, basename = nil, base_prefix = nil, base_names = nil, relpath_names = nil;

      
      dest_directory = self.$cleanpath().$to_s();
      base_directory = base_directory.$cleanpath().$to_s();
      dest_prefix = dest_directory;
      dest_names = [];
      while ((($b = (r = self.$chop_basename(dest_prefix))) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        
        $c = r, $b = Opal.to_ary($c), (dest_prefix = ($b[0] == null ? nil : $b[0])), (basename = ($b[1] == null ? nil : $b[1])), $c;
        if ((($b = basename['$!='](".")) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
          dest_names.$unshift(basename)};
      };
      base_prefix = base_directory;
      base_names = [];
      while ((($b = (r = self.$chop_basename(base_prefix))) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        
        $c = r, $b = Opal.to_ary($c), (base_prefix = ($b[0] == null ? nil : $b[0])), (basename = ($b[1] == null ? nil : $b[1])), $c;
        if ((($b = basename['$!='](".")) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
          base_names.$unshift(basename)};
      };
      if ((($a = Opal.const_get($scopes, 'SAME_PATHS', true, true)['$[]'](dest_prefix, base_prefix)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$raise(Opal.const_get($scopes, 'ArgumentError', true, true), "" + "different prefix: " + (dest_prefix.$inspect()) + " and " + (base_directory.$inspect()))
      };
      while ((($b = ($c = ($d = dest_names['$empty?']()['$!'](), $d !== false && $d !== nil && $d != null ?base_names['$empty?']()['$!']() : $d), $c !== false && $c !== nil && $c != null ?Opal.const_get($scopes, 'SAME_PATHS', true, true)['$[]'](dest_names.$first(), base_names.$first()) : $c)) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        
        dest_names.$shift();
        base_names.$shift();
      };
      if ((($a = base_names['$include?']("..")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        self.$raise(Opal.const_get($scopes, 'ArgumentError', true, true), "" + "base_directory has ..: " + (base_directory.$inspect()))};
      base_names.$fill("..");
      relpath_names = $rb_plus(base_names, dest_names);
      if ((($a = relpath_names['$empty?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return Opal.const_get($scopes, 'Pathname', true, true).$new(".")
        } else {
        return Opal.const_get($scopes, 'Pathname', true, true).$new($send(Opal.const_get($scopes, 'File', true, true), 'join', Opal.to_a(relpath_names)))
      };
    }, TMP_Pathname_relative_path_from_25.$$arity = 1);
    return (Opal.defn(self, '$entries', TMP_Pathname_entries_27 = function $$entries() {
      var TMP_26, self = this;

      return $send(Opal.const_get($scopes, 'Dir', true, true).$entries(self.path), 'map', [], (TMP_26 = function(f){var self = TMP_26.$$s || this;
if (f == null) f = nil;
      return self.$class().$new(f)}, TMP_26.$$s = self, TMP_26.$$arity = 1, TMP_26))
    }, TMP_Pathname_entries_27.$$arity = 0), nil) && 'entries';
  })($scope.base, null, $scopes);
  return (function($base, $visibility_scopes) {
    var $Kernel, self = $Kernel = $module($base, 'Kernel');

    var def = self.$$proto, $scope = self.$$scope, $scopes = $visibility_scopes.slice().concat($scope), TMP_Kernel_Pathname_28;

    Opal.defn(self, '$Pathname', TMP_Kernel_Pathname_28 = function $$Pathname(path) {
      var self = this;

      return Opal.const_get($scopes, 'Pathname', true, true).$new(path)
    }, TMP_Kernel_Pathname_28.$$arity = 1)
  })($scope.base, $scopes);
};
